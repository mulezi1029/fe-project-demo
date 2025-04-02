const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

// 使用 cors 中间件
app.use(cors());

// 读取本地 version.json 文件获取版本号
function getFrontendVersion() {
    const versionFilePath = path.join(__dirname, '../frontend/public/version.json');
    try {
        const versionData = fs.readFileSync(versionFilePath, 'utf8');
        const versionObj = JSON.parse(versionData);
        return versionObj.version;
    } catch (error) {
        console.error('Failed to read version file:', error);
        return 'unknown';
    }
}

app.get('/version', (req, res) => {
    const version = getFrontendVersion();
    res.json({ version });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});    