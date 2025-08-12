const { Marpit } = require('@marp-team/marpit');
const fs = require('fs');

// Create a new Marpit instance
const marpit = new Marpit({
  html: true,
  container: true
});

// Read the markdown file
const markdown = fs.readFileSync('presentation.md', 'utf8');

// Generate HTML slides
const { html, css } = marpit.render(markdown);

// Create complete HTML document
const completeHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Presentation</title>
  <style>
    ${css}
    body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
    section { 
      border: 1px solid #ddd; 
      margin: 20px 0; 
      padding: 40px; 
      min-height: 400px; 
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync('presentation.html', completeHtml);

console.log('Slides generated successfully!');
console.log('Open presentation.html in your browser to view the slides.');