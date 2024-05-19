// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause":
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  };
  return badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";
  const links = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
  };
  return links[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License\nThis project is licensed under the ${license} license. For more information, see [here](${renderLicenseLink(
    license
  )}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;
