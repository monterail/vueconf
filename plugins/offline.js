if(navigator.serviceWorker) {
	navigator
		.serviceWorker
		.register('sw.js')
		.then(function(r) {
			console.log('Available offline');
		})
		.catch(function(e) {
			console.log('NOT available offline');
			console.log(e);
		});
} else {
	console.log('Service workers are not supported');
}