const fs = require('fs');
const data = fs.readFileSync(process.argv[2], { encoding: 'utf-8' });
const lines = data.trim().split('\n').filter(str => str.toLowerCase().includes('@amazon.com'));
fs.writeFileSync('output_names.txt', lines.join('\n'));