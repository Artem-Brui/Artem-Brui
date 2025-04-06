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
    frontend: [
      { name: "HTML", icon: "./images/skills/html.jpg" },
      { name: "CSS", icon: "./images/skills/css.png" },
      { name: "SASS", icon: "./images/skills/sass.jpg" },
      { name: "Bootstrap", icon: "./images/skills/bootstrap.png" },
      { name: "Tailwind", icon: "./images/skills/tailwind.webp" },
      { name: "Bulma", icon: "./images/skills/bulma.png" },
      { name: "Figma", icon: "./images/skills/figma.png" },
      { name: "JavaScript", icon: "./images/skills/javascript.png" },
      { name: "TypeScript", icon: "./images/skills/typescript.png" },
    ],
    backend: [
      { name: "React", icon: "./images/skills/react.png" },
      { name: "Context API", icon: "./images/skills/context-api.webp" },
      { name: "REST API", icon: "./images/skills/rest-api.webp" },
      { name: "Redux", icon: "./images/skills/redux.png" },
      { name: "Express", icon: "./images/skills/express.png" },
      { name: "MongoDB", icon: "./images/skills/mongodb.png" },
      { name: "Socket.io", icon: "./images/skills/socket.webp" },
      { name: "Git", icon: "./images/skills/git.png" },
    ],
  },
  works: [
    {
      title: "People App",
      image: "./images/works/people-app.webp",
      repoLink: "https://github.com/Artem-Brui/People-App",
      demoLink: "https://artem-brui.github.io/People-App/#/people",
      features: [
        "Advanced search with multiple parameters (name, parents, gender, century)",
        "URL-based state management for shareable search results",
        "Real-time filtering and sorting capabilities",
        "Responsive design with modern UI components",
        "Efficient data handling with loading states",
      ],
      techStack: [
        "React 19",
        "TypeScript",
        "React Router",
        "Bulma CSS",
        "Font Awesome",
        "GitHub Pages",
      ],
    },
  ],
};