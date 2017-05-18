if (!Cache.prototype.add) {
  Cache.prototype.add = function add(request) {
    return this.addAll([request]);
  };
}

if (!Cache.prototype.addAll) {
  Cache.prototype.addAll = function addAll(requests) {
    var cache = this;

    // Since DOMExceptions are not constructable:
    function NetworkError(message) {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    }
    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve().then(function() {
      if (arguments.length < 1) throw new TypeError();

      // Simulate sequence<(Request or USVString)> binding:
      var sequence = [];

      requests = requests.map(function(request) {
        if (request instanceof Request) {
          return request;
        }
        else {
          return String(request); // may throw TypeError
        }
      });

      return Promise.all(
        requests.map(function(request) {
          if (typeof request === 'string') {
            request = new Request(request);
          }

          var scheme = new URL(request.url).protocol;

          if (scheme !== 'http:' && scheme !== 'https:') {
            throw new NetworkError("Invalid scheme");
          }

          return fetch(request.clone());
        })
      );
    }).then(function(responses) {
      // TODO: check that requests don't overwrite one another
      // (don't think this is possible to polyfill due to opaque responses)
      return Promise.all(
        responses.map(function(response, i) {
          return cache.put(requests[i], response);
        })
      );
    }).then(function() {
      return undefined;
    });
  };
}

if (!CacheStorage.prototype.match) {
  // This is probably vulnerable to race conditions (removing caches etc)
  CacheStorage.prototype.match = function match(request, opts) {
    var caches = this;

    return this.keys().then(function(cacheNames) {
      var match;

      return cacheNames.reduce(function(chain, cacheName) {
        return chain.then(function() {
          return match || caches.open(cacheName).then(function(cache) {
            return cache.match(request, opts);
          }).then(function(response) {
            match = response;
            return match;
          });
        });
      }, Promise.resolve());
    });
  };
}

var CACHE_NAME = 'cache-all-v1';

if(typeof CACHE_NAME !== 'string') {
	throw new Error('Cache Name cannot be empty');
}

self.addEventListener('install', function(event) {
  console.log('The service worker is being installed.');
  event.waitUntil(precache());
});

self.addEventListener('fetch', function(event) {

  if (event.request.method !== 'GET') {
    // Fetch event ignored
    return;
  }
	// Clone the request for fetch and cache
	// A request is a stream and can be consumed only once.
	var fetchRequest = event.request.clone(),
		cacheRequest = event.request.clone();

	// Respond with content from fetch or cache
	event.respondWith(

		// Try fetch
		fetch(fetchRequest)

			// when fetch is successful, we update the cache
			.then(function(response) {

				// A response is a stream and can be consumed only once.
				// Because we want the browser to consume the response,
				// as well as cache to consume the response, we need to
				// clone it so we have 2 streams
				var responseToCache = response.clone();

				// and update the cache
				caches
					.open(CACHE_NAME)
					.then(function(cache) {

						// Clone the request again to use it
						// as the key for our cache
						var cacheSaveRequest = event.request.clone();
						cache.put(cacheSaveRequest, responseToCache);

					});

				// Return the response stream to be consumed by browser
				return response;

			})

			// when fetch times out or fails
			.catch(function(err) {

				// Return the promise which
				// resolves on a match in cache for the current request
				// ot rejects if no matches are found
				return caches.match(cacheRequest);

			})
	);
});

// Now we need to clean up resources in the previous versions
// of Service Worker scripts
self.addEventListener('activate', function(event) {

	// Destroy the cache
	event.waitUntil(caches.delete(CACHE_NAME));

});

function precache() {
  return caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll([
      '/attractions/barbara.jpg',
      '/attractions/bb_hotel.jpg',
      '/attractions/europeum_hotel.jpg',
      '/attractions/granary_hotel.jpg',
      '/attractions/karavan.jpg',
      '/attractions/la_maddalena.jpg',
      '/attractions/mama_manousch.jpg',
      '/attractions/market_hall.jpg',
      '/attractions/market_square.jpg',
      '/attractions/monopol_hotel.jpg',
      '/attractions/national_museum.jpg',
      '/attractions/ostrow_tumski.jpg',
      '/attractions/papa_bar.jpg',
      '/attractions/pergola.jpg',
      '/attractions/pod-papugami.jpg',
      '/attractions/poster_gallery.jpg',
      '/attractions/puro_hotel.jpg',
      '/attractions/qubus_hotel.jpg',
      '/attractions/sakana_sushi.jpg',
      '/attractions/sky_tower.jpg',
      '/attractions/szajba.jpg',
      '/attractions/szajnochy_11.jpg',
      '/attractions/zyzna.jpg',
      'img/alex.jpg',
      'img/blake.jpg',
      'img/callum.jpg',
      'img/cover.png',
      'img/ed.jpg',
      'img/evan.jpg',
      'img/guillaume.jpg',
      'img/jacob.jpg',
      'img/logo-120.png',
      'img/logo-144.png',
      'img/logo-152.png',
      'img/logo-192.png',
      'img/logo-384.png',
      'img/logo-48.png',
      'img/roman.jpg',
      'img/sarah.jpg',
      'img/sean.jpg',
      'img/sebastien.jpg',
    ]);
  });
}
