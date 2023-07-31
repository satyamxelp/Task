const fs = require('fs');

function countWordsInFile(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const wordCount = data.split(/\s+/).length;
        console.log(`Total word count in :  ${wordCount}`);
    });
}

const fileName = '/home/satyam/Desktop/Test/Task/test.txt';
countWordsInFile(fileName);
