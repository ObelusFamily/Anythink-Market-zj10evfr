const fs = require('fs');
const data = fs.readFileSync(process.argv[2], { encoding: 'utf-8' });
const lines = data.trim().split('\n').filter(str => str.toLowerCase().includes('@amazon.com'));
const parsed = lines.map(str => str.trim().split(','));
const formatted = parsed.map((arr) => `${arr[0]} ${arr[2]} ${arr[1]}`).join('\n') + '\n';
fs.writeFileSync('output_names.txt', formatted);