export default [
  {
    type: "talk",
    img: "/img/ed.jpg",
    topic: "Make your Apps Realtime with Firebase and Vue",
    author: "Eduardo San Martin Morote",
    social: [
      {
        github: "https://github.com/posva",
        twitter: "https://twitter.com/posva"
      }
    ],
    authorInfo: "Vue.js Core Team Member",
    description: "Vue has brought elegant and accessible reactivity to interfaces making it easy to keep the view updated with the local data. On the other hand, Firebase makes it easy to sync the local data with a database, so… what if we combine them to create a super efficient workflow? \n\n During this talk, I’ll explain how a real time database like Firebase can make your application even better and why it works so well with Vue. We will understand when and how to integrate Firebase with Vue to create real time applications.",
    startTime: "9:30",
    duration: "30min"
  },
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
    startTime: "10:05",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "10:35",
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
    startTime: "10:55",
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
    startTime: "11:40",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "12:10",
    duration: "20min"
  },
  {
    type: "talk",
    img: "/img/jacoblee.jpg",
    topic: "Using Serverless Technology to Ship Vue Apps That Scale",
    author: "Jacob Lee",
    social: [
      {
        "github": "https://github.com/jacoblee93",
        "twitter": "https://twitter.com/Hacubu"
      }
    ],
    authorInfo: "Software Engineer at StdLib",
    description: "'Serverless' is the new flavor of the week in software development, but what does it mean, where did the servers go (spoiler: they're still around!), and how can we leverage this technology to make frontend development easier?\n\n In this talk we'll cover the basics of serverless technology, how what we're building at StdLib helps you harness this type of architecture, and ultimately, how you can use this knowledge to ship Vue apps in record time, without configuration and infrastructure management woes.",
    startTime: "12:30",
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
    startTime: "13:05",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-lunch-break.svg",
    topic: "Lunch break",
    startTime: "13:40",
    duration: "1h 35min"
  },
  {
    type: "other",
    img: "/img/ic-lighting-talks.svg",
    topic: "Lightning Talks",
    startTime: "15:10",
    duration: "50min"
  },
  {
    type: "talk",
    img: "/img/roman.jpg",
    topic: "Testing Vue components with Jest",
    author: "Roman Kuba",
    social: [
      {
        github: "https://github.com/codebryo",
        twitter: "https://twitter.com/Codebryo"
      }
    ],
    authorInfo: "Lead Frontend Scientist at Codeship",
    description: "The necessity of testing is still often seen as a burden when writing code, yet when done right, it will dramatically change how code gets written.\n\n What makes Vue special in this regards, it’s quite convenient to test for it’s approach in simplicity and leveraged functions and objects wherever possible.\n\n In this talk we will look at what makes up a good practice in testing and how jest works. We’ll continue to test some simple Vue Components and see how we can effectively test and store the rendered output with snapshots.\n\n Well conclude by looking at a component that heavily relies on Vuex for it’s state management and peek into the possible directions from there.",
    startTime: "15:55",
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
    startTime: "16:30",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-end-2.svg",
    topic: "Goodbye Speech",
    startTime: "17:05"
  },
]
