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
    frontend: {
      title: 'Layout Design',
      skills: [
        { name: "HTML", icon: "./images/skills/layout/html.jpg" },
        { name: "CSS", icon: "./images/skills/layout/css.png" },
        { name: "SASS", icon: "./images/skills/layout/sass.jpg" },
        { name: "Bootstrap", icon: "./images/skills/layout/bootstrap.png" },
        { name: "Tailwind", icon: "./images/skills/layout/tailwind.webp" },
        { name: "Bulma", icon: "./images/skills/layout/bulma.png" },
        { name: "Figma", icon: "./images/skills/layout/figma.png" },
      ]
    } ,
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: "JavaScript", icon: "./images/skills/frontend/javascript.png" },
        { name: "TypeScript", icon: "./images/skills/frontend/typescript.png" },
        { name: "React", icon: "./images/skills/frontend/react.png" },
        { name: "Context API", icon: "./images/skills/frontend/context-api.webp" },
        { name: "Redux", icon: "./images/skills/frontend/redux.png" },
        { name: "Git", icon: "./images/skills/frontend/git.png" },
      ]
    } ,
    backend: {
      title: 'Backend Development',
      skills: [
        { name: "Express", icon: "./images/skills/backend/express.png" },
        { name: "MongoDB", icon: "./images/skills/backend/mongodb.png" },
        { name: "Socket.io", icon: "./images/skills/backend/socket.webp" },
        { name: "REST API", icon: "./images/skills/backend/rest-api.webp" },
      ]
    } ,
    marketing: {
      title: 'Performance Marketing',
      skills: [
      { name: "Google Ads", icon: "./images/skills/marketing/google-ads.webp" },
      { name: "Facebook Ads", icon: "./images/skills/marketing/facebook-ads.webp" },
      { name: "Google Analytics", icon: "./images/skills/marketing/google-analytics.webp" },
      { name: "Google Tag Manager", icon: "./images/skills/marketing/google-tag-manager.webp" },
      { name: "Facebook API", icon: "./images/skills/marketing/facebook-api.webp" },
      ]
    },
    content: {
      title: 'Content Creation',
      skills: [
      { name: "Adobe Photoshop", icon: "./images/skills/content/photoshop.png" },
      { name: "Adobe Premiere", icon: "./images/skills/content/premiere.png" },
      ]
    } ,
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