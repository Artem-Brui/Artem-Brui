export const data = {
  title: "Full Stack Web Developer",
  contacts: {
    email: {
      icon: "./images/contacts/email.webp",
      text: "artembryj@gmail.com",
      link: "mailto:artembryj@gmail.com",
    },
    linkedin: {
      icon: "./images/contacts/linkedin.webp",
      text: "Artem Brui - LinkedIn",
      link: "https://linkedin.com/in/artem-brui",
    },
  },
  techStack: {
    layout: {
      title: "Layout Design",
      skills: [
        { name: "HTML", icon: "./images/skills/layout/html.jpg" },
        { name: "CSS", icon: "./images/skills/layout/css.png" },
        { name: "SASS", icon: "./images/skills/layout/sass.jpg" },
        { name: "Bootstrap", icon: "./images/skills/layout/bootstrap.png" },
        { name: "Tailwind", icon: "./images/skills/layout/tailwind.webp" },
        { name: "Bulma", icon: "./images/skills/layout/bulma.png" },
        { name: "Figma", icon: "./images/skills/layout/figma.png" },
      ],
    },
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: "./images/skills/frontend/javascript.png" },
        { name: "TypeScript", icon: "./images/skills/frontend/typescript.png" },
        { name: "React", icon: "./images/skills/frontend/react.png" },
        {
          name: "Context API",
          icon: "./images/skills/frontend/context-api.webp",
        },
        { name: "Redux", icon: "./images/skills/frontend/redux.png" },
        { name: "Git", icon: "./images/skills/frontend/git.png" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Express", icon: "./images/skills/backend/express.png" },
        { name: "MongoDB", icon: "./images/skills/backend/mongodb.png" },
        { name: "Socket.io", icon: "./images/skills/backend/socket.webp" },
        { name: "REST API", icon: "./images/skills/backend/rest-api.webp" },
      ],
    },
    marketing: {
      title: "Performance Marketing",
      skills: [
        {
          name: "Google Ads",
          icon: "./images/skills/marketing/google-ads.webp",
        },
        {
          name: "Facebook Ads",
          icon: "./images/skills/marketing/facebook-ads.webp",
        },
        {
          name: "Google Analytics",
          icon: "./images/skills/marketing/google-analytics.webp",
        },
        {
          name: "Google Tag Manager",
          icon: "./images/skills/marketing/google-tag-manager.webp",
        },
        {
          name: "Facebook API",
          icon: "./images/skills/marketing/facebook-api.webp",
        },
      ],
    },
    content: {
      title: "Content Creation",
      skills: [
        {
          name: "Adobe Photoshop",
          icon: "./images/skills/content/photoshop.png",
        },
        {
          name: "Adobe Premiere",
          icon: "./images/skills/content/premiere.png",
        },
      ],
    },
  },
  works: {
    booksTable: {
      title: "Books-Table (Frontend + Backend)",
      focus: "React, Context API, React Router, UrlSearchParams",
      imageLink: "./images/works/books.webp",
      lists: [
        {
          title: "Key Features",
          list: [
            "Styled by Bulma CSS and custom styles",
            "Fully responsive and mobile-friendly interface",
            "Efficient state handling using Reducers and Dispatch",
            "Universal function for handling API requests, supporting GET, POST, PATCH, and DELETE methods",
            "Error handling and loading states for a smooth user experience",
            "Clean and intuitive design with icon integration for enhanced UX",
            "Deployed on OnRender server for seamless access and scalability",
            "Utilizes MongoDB for robust and scalable data storage",
            "RESTful API with universal request handler for efficient data processing",
            "Secure data handling practices to protect user information",
            "Built with Node.js and Express.js for fast and reliable server-side operations",
            "Deployed on OnRender server for reliable backend services",
          ],
        },
        {
          title: "Technical Stack",
          list: [
            "React / TypeScript",
            "React Router",
            "SASS",
            "Bulma CSS",
            "Context API",
            "Reducer and Dispatch",
            "FontAwesome",
            "Node.js / TypeScript",
            "Express.js",
            "REST API",
            "MongoDB",
          ],
        },
      ],
      repoLink: "https://github.com/Artem-Brui/Books-Table",
      demoLink: "https://books-table.onrender.com/",
    },
    peopleApp: {
      title: "People App (Frontend only)",
      focus: "React, Context API, React Router, UrlSearchParams",
      imageLink: "./images/works/people-app.webp",
      lists: [
        {
          title: "Key Features",
          list: [
            "Advanced search with multiple parameters (name, parents, gender, century)",
            "URL-based state management for shareable search results",
            "Real-time filtering and sorting capabilities",
            "Responsive design with modern UI components",
            "Efficient data handling with loading states",
          ],
        },
        {
          title: "Technical Stack",
          list: [
            "React 19",
            "TypeScript",
            "React Router",
            "Context API",
            "UrlSearchParams",
            "Bulma CSS",
            "Font Awesome",
            "GitHub Pages",
          ],
        },
      ],
      repoLink: "https://github.com/Artem-Brui/People-App",
      demoLink: "https://artem-brui.github.io/People-App/#/people",
    },
    todoApp: {
      title: "Todo App (Frontend only)",
      focus: "React, Context API, React Router, Local Storage",
      imageLink: "./images/works/todo-app.webp",
      lists: [
        {
          title: "Key Features",
          list: [
            "Full CRUD operations for todos (Create, Read, Update, Delete)",
            "Local storage persistence for data management",
            "Bulk actions (complete all, clear completed)",
            "Real-time filtering",
            "Mobile-responsive design",
          ],
        },
        {
          title: "Technical Stack",
          list: [
            "React 19",
            "TypeScript",
            "Context API",
            "LocalStorage",
            "SASS",
            "Bulma CSS",
            "Font Awesome",
          ],
        },
      ],
      repoLink: "https://github.com/Artem-Brui/Todo-App",
      demoLink: "https://artem-brui.github.io/Todo-App/",
    },
    pagination: {
      title: "Pagination (Frontend only)",
      focus: "React, Pagination Solution",
      imageLink: "./images/works/pagination.webp",
      lists: [
        {
          title: "Key Features",
          list: [
            "Adjust number of items per page (3, 5, 10, 20)",
            "Navigate through pages with intuitive controls",
            "Display current page and item range",
            "Responsive pagination component",
            "Clean and intuitive interface using Bootstrap 5",
          ],
        },
        {
          title: "Technical Stack",
          list: ["React 19", "TypeScript", "Bootstrap 5"],
        },
      ],
      repoLink: "https://github.com/Artem-Brui/Items-Pagination",
      demoLink: "https://artem-brui.github.io/Items-Pagination/",
    },
    game2048: {
      title: "Game 2048 (Frontend only)",
      focus: "JavaScript, SASS, Local Storage",
      imageLink: "./images/works/game-2048.webp",
      lists: [
        {
          title: "Key Features",
          list: [
            "Smooth tile movement and merging",
            "Random tile generation (2 or 4)",
            "Score tracking (saving in Local Storage)",
            "Win/lose conditions",
            "Keyboard arrow keys support",
            "Touch swipe support for mobile",
            "Responsive design for all devices",
          ],
        },
        {
          title: "Technical Stack",
          list: [
            "HTML5",
            "CSS / SASS",
            "JavaScript",
            "Local Storage",
            "GitHub Pages",
          ],
        },
      ],
      repoLink: "https://github.com/Artem-Brui/Game-2048",
      demoLink: "https://artem-brui.github.io/Game-2048/",
    },
    landingMET: {
      title: "MET Landing Page (Frontend only)",
      focus: "HTML, SASS",
      imageLink: "./images/works/met-landing.webp",
      lists: [
        {
          title: "Key Features",
          list: [
            "Adapts seamlessly to different screen sizes and devices",
            "Implementation of Header functionality without JavaScript",
            "Modern aesthetics with contemporary design principles",
            "Engaging components to enhance user experience",
            "Smooth animations and transitions",
          ],
        },
        {
          title: "Technical Stack",
          list: ["HTML5", "CSS / SASS", "GitHub Pages"],
        },
      ],
      repoLink: "https://github.com/Artem-Brui/MET-Landing-page",
      demoLink: "https://artem-brui.github.io/MET-Landing-page/",
    },
  },
};
