const fs = require("fs");
const { data } = require("./data");
const { getSkillsList, getWorksList } = require("./utils");

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
  markdown += getSkillsList(data, 'frontend');
  markdown += getSkillsList(data, 'backend');
  markdown += getSkillsList(data, 'marketing');
  markdown += getSkillsList(data, 'content');
  markdown += "</div>\n\n";

  // Works
  markdown += "## My Works\n\n";
  markdown += getWorksList(data);

  return markdown;
}

fs.writeFileSync("README.md", generateMarkdown());
console.log("Done!!");
