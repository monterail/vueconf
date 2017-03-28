export default [
    {
    type: "talk",
    img: "/img/evan.jpg",
    topic: "Keynote",
    author: "Evan You",
    social: [
      {
        github: "https://github.com/yyx990803",
        twitter: "https://twitter.com/youyuxi"
      }
    ],
    authorInfo: "Vue.js Author",
    descriptionIntro: ""
  },
  {
    type: "talk",
    img: "/img/sarah.jpg",
    topic: "Animating Vue",
    author: "Sarah Drazner",
    social: [
      {
        github: "https://github.com/sdras",
        twitter: "https://twitter.com/sarah_edo"
      }
    ],
    authorInfo: "Consultant",
    description: "As superfluous as something like animation may initially seem, you can tell a lot about framework by the way that it handles the concept of time. Idiosyncrasies and race conditions in rendering reveal themselves, pauses in DOM and virtual DOM diffing can be exposed. \n\n This is one of the ways Vue shows itself to be uniquely capable and elegant as a framework. In this session, we'll cover how to use the <transition> component and some of its offerings to create fluid effects in the browser. We'll move on to watchers and transitioning state. Finally, we'll talk about lifecycle methods, asynchronous updates, and pushing our animations to the next level."
  },
  {
    type: "talk",
    img: "/img/blake.jpg",
    topic: "PRA with Vue.js",
    author: "Blake Newman",
    social: [
      {
        github: "https://github.com/blake-newman",
        twitter: "https://twitter.com/blakenewman"
      }
    ],
    authorInfo: "Software Engineer at Sainsbury’s",
    description: "We will take a look at how Vue.js can work as a PWA (Progressive Web Application). PWA's are boring now, right? Everyone is doing a talk about them, everyone is raving about them. Well let's do something crazy and different! Lets make it realtime. \n\n We will take a look at the best patterns when creating an application, and how the Vue.js ecosystem can power a PWA. Extending the PWA platform we will look how Sockets and Service Workers can coexist together. Creating a PRA (Progressive Realtime Application), allowing platforms to improve the user experience without affecting the critical download chain."
  },
  {
    type: "talk",
    img: "/img/jacob.jpg",
    topic: "No Time to Refactor, How we made the Frontend Awesome At GitLab With Vue.",
    author: "Jacob Schatz",
    social: [
      {
        gitlab: "https://gitlab.com/jschatz1",
        twitter: "https://twitter.com/jakecodes"
      }
    ],
    authorInfo: "Front-end Lead at GitLab",
    description: "How we switched from Coffeescript to ES6, from jQuery to Vue, from the asset pipeline to webpack, from static to realtime, all while adding new features, without refactoring and delivering to 1 million+ users and tons of clients."
  },
  {
    type: "talk",
    img: "/img/sean.jpg",
    topic: "Code splitting patterns in Vue.js",
    author: "Sean Larkin",
    social: [
      {
        github: "https://github.com/TheLarkInn",
        twitter: "https://twitter.com/TheLarkInn"
      }
    ],
    authorInfo: "webpack Core Team Member",
    description: "Coming soon..."
  },
  {
    type: "talk",
    img: ["/img/alex.jpg", "/img/sebastien.jpg"],
    topic: "Server side rendering in Vue.js",
    author: "Alex & Sebastien Chopin",
    social: [
      {
        github: "https://github.com/alexchopin",
        twitter: "https://twitter.com/ChopinAlexandre"
      },
      {
        github: "https://github.com/Atinux",
        twitter: "https://twitter.com/Atinux"
      }
    ],
    authorInfo: "Nuxt.js Authors",
    description: "Server side rendering offers instant feedback and improves the user experience and SEO. Making Isomorphic application with vue.js might be a daunting task. We are going to see in this talk how Nuxt.js simplify the process to create universal vue application and PWA."
  }
]
