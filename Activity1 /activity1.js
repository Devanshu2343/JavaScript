const fs = require('fs');

// Read the content of input.txt file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Reverse the content
  const reversedContent = data.split('\n').reverse().join('\n');

  // Write the reversed content to output.txt file asynchronously
  fs.writeFile('output.txt', reversedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Reversed content has been written to output.txt');
  });
});
