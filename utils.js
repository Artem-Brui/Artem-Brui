export const getSkillsList = (data, field) => {
  const skillsSize = 45;
  let result = "";

  result += `### ${data.techStack[field].title}\n`;
  result +=
    "|" +
    data.techStack[field].skills.map((tech) => ` ${tech.name} `).join("|") +
    "|\n";
  result +=
    "|" + data.techStack[field].skills.map(() => " :---: ").join("|") + "|\n";
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

export const getWorksList = (data) => {
  const workSize = "200px";
  const buttonWidth = "120px";
  const buttonHeight = "50px";
  let result = "";

  Object.values(data.works).map((oneWork) => {
    result += `\n### --- ${oneWork.title}`;
    result += `\n#### TECH FOCUS: ${oneWork.descreption}\n`;
    result += "| Demo | Links |\n";
    result += "| :---: | :---: |\n";
    result += `| [<img src="${oneWork.imageLink}" alt="${oneWork.title}" width="${workSize}" height="${workSize}" />](${oneWork.demoLink}) |`;
    result += `<div>`;
    result += `[<img src="./images/buttons/demo-link.webp" alt="Repo Link" width="${buttonWidth}" height="${buttonHeight}"/>](${oneWork.demoLink}) `;
    result += `[<img src="./images/buttons/repo-link.webp" alt="Repo Link" width="${buttonWidth}" height="${buttonHeight}"/>](${oneWork.repoLink}) `;
    result += `</div> |\n`;

    result += "\n";

    result +=
      "|" + oneWork.lists.map((list) => ` ${list.title} `).join("|") + "|\n";

    result += "|" + oneWork.lists.map(() => " :---: ").join("|") + "|\n";

    result +=
      "|" +
      oneWork.lists
        .map(
          (list) =>
            `<div align="left">${list.list
              .map((item) => `- ${item}<br>`)
              .join("")}</div>`
        )
        .join("|") +
      "|\n";
      result += `\n\n. . . . . . . . . . . . . . . . . . . . . . . . . `;
  });

  return result;
};
