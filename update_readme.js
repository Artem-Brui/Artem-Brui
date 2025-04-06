const fs = require("fs");
const { data } = require("./data");

function generateMarkdown() {
  let markdown = `# ${data.title}\n\n`;

  const skillsSize = 45;
  const workSize = '100%';
  const buttonWidth = '100%';
  const buttonHeight = '30%';

  const getSkillsList = (field) => {
    let result = "";

    result += `### ${data.techStack[field].title}\n`;
    result +=
      "|" +
      data.techStack[field].skills.map((tech) => ` ${tech.name} `).join("|") +
      "|\n";
    result +=
      "|" +
      data.techStack[field].skills.map(() => " :---: ").join("|") +
      "|\n";
    result +=
      "|" +
      data.techStack[field].skills
        .map(
          (tech) =>
            ` <img src="${tech.icon}" alt="${tech.name}" width="${skillsSize}" height="${skillsSize}" title="${tech.name}"/> `
        )
        .join("|") +
      "|\n\n";

    return result;
  };

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
  markdown += getSkillsList('frontend');
  markdown += getSkillsList('backend');
  markdown += getSkillsList('marketing');
  markdown += getSkillsList('content');
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
    markdown += '      <td style="min-width: 200px" align="center">\n';
    markdown += `        <img src="${work.image}" alt="${work.title}" width="${workSize}" height="${workSize}" title="${work.title}"/>\n`;
    markdown += "        <br>\n";
    markdown += "        <br>\n";
    markdown +=
      '        <div style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">\n';
    markdown += '          <table style="min-width: 100%;">\n';
    markdown += "            <tr>\n";
    markdown += "              <td>\n";
    markdown += `                <a href="${work.repoLink}" target="_blank">\n`;
    markdown +=
      `                  <img src="./images/buttons/repo-link.webp" alt="Link to Repo" width="${buttonWidth}" height="${buttonHeight}"/>\n`;
    markdown += "                </a>\n";
    markdown += "              </td>\n";
    markdown += "              <td>\n";
    markdown += `                <a href="${work.demoLink}" target="_blank">\n`;
    markdown +=
      `                  <img src="./images/buttons/demo-link.webp" alt="Link to Repo" width="${buttonWidth}" height="${buttonHeight}"/>\n`;
    markdown += "                </a>\n";
    markdown += "              </td>\n";
    markdown += "            </tr>\n";
    markdown += "          </table>\n";
    markdown += "        </div>\n";
    markdown += "      </td>\n";
    markdown += '      <td align="left"><br>';
    markdown += "        <strong>Key features:</strong><br>\n";
    markdown +=
      work.features.map((feature) => `- ${feature}<br>`).join("\n") + "\n<br>";
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

fs.writeFileSync("README.md", generateMarkdown());
console.log("Done!!");
