export default [
  {
    type: "other",
    img: "/img/ic-happy.svg",
    topic: "Welcome Speech",
    startTime: "9:00",
    duration: "10min"
  },
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
    startTime: "9:10",
    duration: "30min"
  },
  {
    type: "talk",
    img: "/img/chris.jpg",
    topic: "Avoiding an awkward fit: how to best introduce Vue into your app and team",
    author: "Chris Fritz",
    social: [
      {
        "github": "https://github.com/chrisvfritz",
        "twitter": "https://twitter.com/chrisvfritz"
      }
    ],
    authorInfo: "Consultant. Vue.js Core Team Member",
    description: "Vue is versatile. It can be dropped into a page like jQuery, or power an entirely independent frontend. These are the well-known extremes, but for many apps and teams, a lesser-known shade in between would be a better fit.\n\n In this talk, we’ll explore the entire spectrum of integration strategies, including varieties at the extremes. For every kind of app, you’ll learn what’s worked for others and what’s held them back, including specific code examples you can adapt for your own apps.",
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
    startTime: "10:35",
    duration: "30min"
  },
  {
    type: "talk",
    img: "/img/callum.jpg",
    topic: "Accessibility in Single Page Apps",
    author: "Callum Macrae",
    social: [
      {
        github: "https://github.com/callumacrae",
        twitter: "https://twitter.com/callumacrae"
      }
    ],
    authorInfo: "Front-End Developer at SamKnows",
    description: "As developers, we have a responsibility to make sure that as many people as possible can use the websites and applications that we create. But with a new generation of websites—single page applications—come a new set of challenges for users with disabilities, and the assistive technology they use to browse the web. Client-side routing, custom input elements, and shiny animated content: all things that screen readers can struggle with if the developer who implemented it didn't consider accessibility.\n\n During this talk, I'll explain what we as developers can do to ensure that our single page applications are usable by everyone, including people who might not use a keyboard, mouse and screen like the majority of us do. I'll show how some assistive technology is used, and demonstrate how some common mistakes we make affect people using that assistive technology.",
    startTime: "11:10",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "11:40",
    duration: "20min"
  },
  {
    type: "talk",
    img: "/img/pine.jpg",
    topic: "var vetur = vscode + vue;",
    author: "Pine Wu",
    social: [
      {
        github: "https://github.com/octref",
        twitter: "https://twitter.com/octref"
      }
    ],
    authorInfo: "Software engineer at Microsoft",
    description: "Vetur is one of the first editor extensions that aim to bring powerful IDE features to front-end frameworks. With syntax-highlighting, error-checking, linting, formatting and auto-completion, Vetur has become VSCode's default choice for editing Vue files and was demoed with TypeScript at MSBuild 2017.\n\nDuring this talk, we'll first take a look at various features that Vetur offers to provide a better Vue developement experience. Then we'll transition to a deeper dive on the implementation of Vetur's features, with special focus on Vue's language service built on top of TypeScript's language server. Finally, we'll learn about some of Vetur's exciting upcoming features, such as jump to definition, global rename and type-checking for template expressions.",
    startTime: "12:00",
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
    type: "other",
    img: "/img/ic-tba.svg",
    topic: "TBA",
    startTime: "15:25",
    duration: "30min"
  },
  {
    type: "talk",
    img: "/img/filipa.jpg",
    topic: "No Time to Refactor, How we made the Frontend Awesome At GitLab With Vue.",
    author: "Filipa Lacerda",
    social: [
      {
        gitlab: "https://gitlab.com/filipa",
        twitter: "https://twitter.com/filipalacerda"
      }
    ],
    authorInfo: "Frontend Engineer at GitLab",
    description: "How we switched from Coffeescript to ES6, from jQuery to Vue, from the asset pipeline to webpack, from static to realtime, all while adding new features, without refactoring and delivering to 1 million+ users and tons of clients.",
    startTime: "16:00",
    duration: "30min"
  },
  {
    type: "other",
    img: "/img/ic-coffee-break.svg",
    topic: "Coffee break",
    startTime: "16:30",
    duration: "20min"
  },
  {
    type: "other",
    img: "/img/ic-discussion-panel.svg",
    topic: "Discussion Panel",
    startTime: "16:50",
    duration: "45min"
  }
]
