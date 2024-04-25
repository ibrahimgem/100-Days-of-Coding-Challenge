// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var skills = {
    languages: ['JavaScript', 'Python', 'Java'],
    tools: ['VS Code', 'Git', 'GitHub'],
    frameworks: ['React', 'Node.js', 'Express']
};
var languages = skills.languages, tools = skills.tools, frameworks = skills.frameworks;
console.log("Language ".concat(languages[0], ", Tool: ").concat(tools[1], ", Framework: ").concat(frameworks[2]));
