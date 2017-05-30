export default [
  {
    type: "talk",
    img: "/img/masa.jpg",
    topic: "Best Practices for Hybrid Mobile Apps with Vue.js and Onsen UI",
    author: "Masahiro Tanaka",
    social: [
      {
        github: "https://github.com/masahirotanaka"
      }
    ],
    authorInfo: "Founder & CEO, Monaca",
    description: "Native apps require specific stacks, which are commonly unknown to web developers, whereas  web apps are limited when dealing with native features in mobile devices. On the other hand, hybrid apps combine the power of native and web apps to get the benefits of both sides. It allows creating native-like apps with web technologies such as Vue.js or any other tool that web developers already know and love. \n\n Onsen UI is a library of UI components and utilities to help you create beautiful hybrid apps very quickly. Implemented on top of Web Components, Onsen UI is framework agnostic and can easily be combined with Vue.js to bootstrap your apps. It provides a Vue-like API to make its usage very simple and straightforward. Apart from that, Onsen UI’s ecosystem tools manage all jobs related to publishing or updating apps to stores, notifications, device debugging and more.",
    startTime: "9:15",
    duration: "30min"
  },
  {
    type: "talk",
    img: "/img/sarah.jpg",
    topic: "Animating Vue",
    author: "Sarah Drasner",
    social: [
      {
        github: "https://github.com/sdras",
        twitter: "https://twitter.com/sarah_edo"
      }
    ],
    authorInfo: "Consultant",
    description: "As superfluous as something like animation may initially seem, you can tell a lot about framework by the way that it handles the concept of time. Idiosyncrasies and race conditions in rendering reveal themselves, pauses in DOM and virtual DOM diffing can be exposed. \n\n This is one of the ways Vue shows itself to be uniquely capable and elegant as a framework. In this session, we'll cover how to use the <transition> component and some of its offerings to create fluid effects in the browser. We'll move on to watchers and transitioning state. Finally, we'll talk about lifecycle methods, asynchronous updates, and pushing our animations to the next level.",
    startTime: "9:45",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "10:15",
    duration: "20min"
  },
  {
    type: "talk",
    img: "/img/eric.jpg",
    topic: "The Evolution of API Design: From RPC to GraphQL",
    author: "Eric Baer",
    social: [
      {
        "github": "https://github.com/baer",
        "twitter": "https://twitter.com/ebaerbaerbaer"
      }
    ],
    authorInfo: "Lead Software Engineer at Formidable",
    description: "Over the last 60 years, API designs have changed to respond to everything from new network topologies and new language designs, to the pressures of managing ever larger code bases. Today’s most popular API pattern, REST, was developed in a time where the cost of making API requests were plummeting. At the time, bandwidth was getting cheaper, latency was dropping, and the computing power of devices was still tracking Moore’s Law. Mobile turned this on its head. The environments in which apps and APIs need to perform today have effectively regressed a decade.\n\n This talk will explore some of the new client-server interaction models that address today’s pressures and use history to understand the tradeoffs that we made at the transition between the previous designs. I will introduce major tools that are attempting to change the API landscape including GraphQL and Falcor. Since GraphQL is the dominant technology in this space, I will examine some of it’s functionality, touch on some of its syntax and present a live coding demo that shows off a GraphQL server from 0 to 1. Demonstrating a complete implementation in under 10 minutes will give a strong sense of what’s possible, and what kind of complexity burden a tool like this would impose.\n Spoiler: There is no silver bullet.",
    startTime: "10:35",
    duration: "30min"
  },
  {
    type: "talk",
    img: "/img/guillaume.jpg",
    topic: "GraphQL made easy with Apollo and Vue",
    author: "Guillaume Chau",
    social: [
      {
        github: "https://github.com/akryum",
        twitter: "https://twitter.com/akryum"
      }
    ],
    authorInfo: "Vue.js Core Team Member",
    description: "GraphQL is a new way of building client-server interactions that is gaining a lot of traction lately, thanks to the clear advantages it brings to the Web Service world. As an emerging standard, GraphQL needs the community to back the adoption and to create tools so more developers can enjoy it.\n\n Apollo is one the most popular GraphQL community project, launched by the Meteor Development Group. The Apollo Client has a very good support of the current spec and features everything you need to use the full power of GraphQL in your apps on multiple platforms.\n\n During this talk, we will learn how Apollo can help us start using GraphQL today and how some integrations in our Vue components and Vuex stores will make our lives easier.",
    startTime: "11:05",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "11:35",
    duration: "30min"
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
    description: "Vue champions developer experience. It's a bit of Angular on top with React on the bottom. No matter what your preference is, the flexibility baked into the library makes it perfect for anyone. But what about web performance? Can this flexibility still allow us to split code into asynchronous chunks?\n\nAs a maintainer of webpack, Vue.js was love at first sight for me! Because everything is a Component, everything can also be a Async Component!! This is the ultimate flexibility. Join me while we talk about all the ways to split up your Vue Application. By the time we're done, you'll walk away ready to create high performance Vue Components, Applications, and Libraries.",
    startTime: "12:05",
    duration: "30min"
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
    description: "We will take a look at how Vue.js can work as a PWA (Progressive Web Application). PWA's are boring now, right? Everyone is doing a talk about them, everyone is raving about them. Well let's do something crazy and different! Lets make it realtime. \n\n We will take a look at the best patterns when creating an application, and how the Vue.js ecosystem can power a PWA. Extending the PWA platform we will look how Sockets and Service Workers can coexist together. Creating a PRA (Progressive Realtime Application), allowing platforms to improve the user experience without affecting the critical download chain.",
    startTime: "12:35",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-lunch-break.svg",
    topic: "Lunch break",
    startTime: "13:05",
    duration: "1h 35min"
  },
  {
    type: "other",
    img: "/img/ic-lighting-talks.svg",
    topic: "Lightning Talks",
    startTime: "14:40",
    duration: "50min"
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
    description: "Server side rendering offers instant feedback and improves the user experience and SEO. Making Isomorphic application with vue.js might be a daunting task. We are going to see in this talk how Nuxt.js simplify the process to create universal vue application and PWA.",
    startTime: "15:30",
    duration: "30min"
  },
  {
    type: "talk",
    img: "/img/pine-wu.jpg",
    topic: "Building modern editor support for Vue",
    author: "Pine Wu",
    social: [
      {
        github: "https://github.com/",
        twitter: "https://twitter.com/"
      }
    ],
    authorInfo: "",
    description: "",
    startTime: "16:00",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "16:30",
    duration: "15min"
  },
  {
    type: "other",
    img: "/img/ic-discussion-panel.svg",
    topic: "Discussion Panel",
    startTime: "16:45",
    duration: "45min"
  },
  {
    type: "other",
    img: "/img/ic-end-2.svg",
    topic: "Goodby Speech",
    startTime: "17:30"
  },
]
