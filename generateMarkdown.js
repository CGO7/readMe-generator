// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
// var img='/assets/images/apache.png'
const license = new Map([['Apache 2.0', img], ['GNU v3.0', 2], ['MIT', 3], ['Boost Software 1.0', 4], ['Creative Commons Zero v1.0 Univerasl', 5], ['Eclipse Public 2.0', 6], ['Mozilla Public 2.0', 7], ['GNU', 8], ['BSD', 9], ['None', 10]]);

for (const [data, title] of license) {
  console.log(`${data}, ${title}`);
}