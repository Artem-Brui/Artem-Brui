const fs = require("fs");

const data = {
  title: "Full Stack Web Developer",
  contacts: {
    email: {
      icon: "./img/email.webp",
      text: "artembryj@gmail.com",
      link: "mailto:artembryj@gmail.com",
    },
    linkedin: {
      icon: "./img/linkedin.webp",
      text: "Artem Brui - LinkedIn",
      link: "https://linkedin.com/in/artem-brui",
    },
  },
  techStack: {
    frontend: [
      { name: "HTML", icon: "./img/html.jpg" },
      { name: "CSS", icon: "./img/css.png" },
      { name: "SASS", icon: "./img/sass.jpg" },
      { name: "Bootstrap", icon: "./img/bootstrap.png" },
      { name: "Tailwind", icon: "./img/tailwind.webp" },
      { name: "Bulma", icon: "./img/bulma.png" },
      { name: "Figma", icon: "./img/figma.png" },
      { name: "JavaScript", icon: "./img/javascript.png" },
      { name: "TypeScript", icon: "./img/typescript.png" },
    ],
    backend: [
      { name: "React", icon: "./img/react.png" },
      { name: "Context API", icon: "./img/context-api.webp" },
      { name: "REST API", icon: "./img/rest-api.webp" },
      { name: "Redux", icon: "./img/redux.png" },
      { name: "Express", icon: "./img/express.png" },
      { name: "MongoDB", icon: "./img/mongodb.png" },
      { name: "Socket.io", icon: "./img/socket.webp" },
      { name: "Git", icon: "./img/git.png" },
    ],
  },
  works: [
    {
      title: "People App",
      image: "./works/people-app.webp",
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

function generateMarkdown() {
  let markdown = `# ${data.title}\n\n`;

  // Contacts section
  markdown += "## Contacts\n";
  markdown += '<div align="left">\n\n';
  for (const [key, contact] of Object.entries(data.contacts)) {
    markdown += `[<img src="${contact.icon}" alt="${key}" width="30" height="30" title="${key}"/>](${contact.link})\n`;
    markdown += `[${contact.text}](${contact.link})\n\n`;
  }
  markdown += "</div>\n\n";

  // Tech Stack section
  markdown += "## Tech Stack\n\n";
  markdown += '<div align="center">\n\n';

  // Frontend table
  markdown +=
    '<div style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; margin: 0 -1rem; padding: 0 1rem;">\n';
  markdown += '<table style="min-width: 100%;">\n';
  markdown +=
    "|" +
    data.techStack.frontend.map((tech) => ` ${tech.name} `).join("|") +
    "|\n";
  markdown +=
    "|" + data.techStack.frontend.map(() => " :---: ").join("|") + "|\n";
  markdown +=
    "|" +
    data.techStack.frontend
      .map(
        (tech) =>
          ` <img src="${tech.icon}" alt="${tech.name}" width="40" height="40" title="${tech.name}"/> `
      )
      .join("|") +
    "|\n";
  markdown += "</table>\n";
  markdown += "</div>\n\n";

  // Backend table
  markdown +=
    '<div style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; margin: 0 -1rem; padding: 0 1rem;">\n';
  markdown += '<table style="min-width: 100%;">\n';
  markdown +=
    "|" +
    data.techStack.backend.map((tech) => ` ${tech.name} `).join("|") +
    "|\n";
  markdown +=
    "|" + data.techStack.backend.map(() => " :---: ").join("|") + "|\n";
  markdown +=
    "|" +
    data.techStack.backend
      .map(
        (tech) =>
          ` <img src="${tech.icon}" alt="${tech.name}" width="40" height="40" title="${tech.name}"/> `
      )
      .join("|") +
    "|\n";
  markdown += "</table>\n";
  markdown += "</div>\n\n";

  markdown += "</div>\n\n";

  // Works section
  markdown += "## My Works\n\n";
  for (const work of data.works) {
    markdown += "<div align=center>\n";
    markdown += `<h3>${work.title}</h3>\n\n`;
    markdown +=
      '<div style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; margin: 0 -1rem; padding: 0 1rem;">\n';
    markdown += '  <table style="min-width: 100%;">\n';
    markdown += "    <tr>\n";
    markdown += '      <td width="40%" align="center">\n';
    markdown += `        <img src="${work.image}" alt="${work.title}" width="200" height="200" title="${work.title}"/>\n`;
    markdown += "        <br>\n";
    markdown += "        <br>\n";
    markdown +=
      '        <div style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">\n';
    markdown += '          <table style="min-width: 100%;">\n';
    markdown += "            <tr>\n";
    markdown += "              <td>\n";
    markdown += `                <a href="${work.repoLink}" target="_blank">\n`;
    markdown +=
      '                  <img src="./img/link-repo.webp" alt="Link to Repo" width="200" height="50"/>\n';
    markdown += "                </a>\n";
    markdown += "              </td>\n";
    markdown += "              <td>\n";
    markdown += `                <a href="${work.demoLink}" target="_blank">\n`;
    markdown +=
      '                  <img src="./img/link-demo.webp" alt="Link to DEMO" width="200" height="50"/>\n';
    markdown += "                </a>\n";
    markdown += "              </td>\n";
    markdown += "            </tr>\n";
    markdown += "          </table>\n";
    markdown += "        </div>\n";
    markdown += "      </td>\n";
    markdown += '      <td align="left">\n';
    markdown += "        <strong>Key features:</strong><br>\n";
    markdown +=
      work.features.map((feature) => `- ${feature}<br>`).join("\n") + "\n\n";
    markdown += "        <strong>Technical stack:</strong><br>\n";
    markdown += work.techStack.map((tech) => `- ${tech}<br>`).join("\n") + "\n";
    markdown += "      </td>\n";
    markdown += "    </tr>\n";
    markdown += "  </table>\n";
    markdown += "</div>\n";
    markdown += "</div>\n";
  }

  return markdown;
}

// Write to README.md
fs.writeFileSync("README2.md", generateMarkdown());
console.log("README.md has been generated successfully!");
