// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let skills = {
    languages: ['JavaScript', 'Python', 'Java'],
    tools: ['VS Code', 'Git', 'GitHub'],
    frameworks: ['React', 'Node.js', 'Express']
  }
  
  let { languages, tools, frameworks } = skills
  
  console.log(`Language ${languages[0]}, Tool: ${tools[1]}, Framework: ${frameworks[2]}`)