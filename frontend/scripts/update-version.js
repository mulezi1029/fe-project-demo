const fs = require('fs');
const path = require('path');

// 读取并递增版本号
const versionFile = path.join(__dirname, '../public/version.json');
let version = JSON.parse(fs.readFileSync(versionFile, 'utf8')).version;
const [major, minor, patch] = version.split('.').map(Number);
version = `${major}.${minor}.${patch + 1}`;

// 写入新版本号
fs.writeFileSync(versionFile, JSON.stringify({ version }, null, 2));
console.log(`Updated version to: ${version}`);