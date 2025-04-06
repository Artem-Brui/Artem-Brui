const fs = require("fs");
const { data } = require("./data");

function generateMarkdown() {
  let markdown = `# ${data.title}\n\n`;

  markdown += "## Contacts\n";
  markdown += '<div align="left">\n\n';
  for (const [key, contact] of Object.entries(data.contacts)) {
    markdown += `[<img src="${contact.icon}" alt="${key}" width="30" height="30" title="${key}"/>](${contact.link})\n`;
    markdown += `[${contact.text}](${contact.link})\n\n`;
  }
  markdown += "</div>\n\n";

  // Tech Stack 
  markdown += "## Tech Stack\n\n";
  markdown += '<div align="center">\n\n';

  // Frontend table
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
    "|\n\n";

  // Backend table
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
    "|\n\n";

  markdown += "</div>\n\n";

  // Works section
  markdown += "## My Works\n\n";
  for (const work of data.works) {
    markdown += "<div align=center>\n";
    markdown += `<h3>${work.title}</h3>\n\n`;
    markdown += "  <table>\n";
    markdown += "    <tr>\n";
    markdown += '      <td width="40%" align="center">\n';
    markdown += `        <img src="${work.image}" alt="${work.title}" title="${work.title}"/>\n`;
    markdown += "        <br>\n";
    markdown += "        <br>\n";
    markdown += "        <table>\n";
    markdown += "          <tr>\n";
    markdown += "            <td>\n";
    markdown += `              <a href="${work.repoLink}" target="_blank">\n`;
    markdown +=
      '                <img src="./img/link-repo.webp" alt="Link to Repo"/>\n';
    markdown += "              </a>\n";
    markdown += "            </td>\n";
    markdown += "            <td>\n";
    markdown += `              <a href="${work.demoLink}" target="_blank">\n`;
    markdown +=
      '                <img src="./img/link-demo.webp" alt="Link to DEMO"/>\n';
    markdown += "              </a>\n";
    markdown += "            </td>\n";
    markdown += "          </tr>\n";
    markdown += "        </table>\n";
    markdown += "      </td>\n";
    markdown += '      <td align="left">\n';
    markdown += "        <strong>Key features:</strong><br>\n";
    markdown +=
      work.features.map((feature) => `        - ${feature}<br>`).join("\n") +
      "<br>\n";
    markdown += "        <strong>Technical stack:</strong><br>\n";
    markdown +=
      work.techStack.map((tech) => `        - ${tech}<br>`).join("\n") + "\n";
    markdown += "      </td>\n";
    markdown += "    </tr>\n";
    markdown += "  </table>\n";
    markdown += "</div>\n";
  }

  return markdown;
}

fs.writeFileSync("README.md", generateMarkdown());
console.log("Done!!");
