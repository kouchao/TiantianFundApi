const fs = require('fs');
const path = require('path');
const { getModules } = require('../src/utils');

const apiDir = 'api';
const apiDirPath = path.resolve(__dirname, `../${apiDir}`);

const isExists = fs.existsSync(apiDirPath);

if (!isExists) {
  fs.mkdirSync(apiDirPath);
}

getModules().forEach(({ fileName, path: filepath }) => {
  const js = `
  const ${fileName} = require("../src${filepath.replace('.', '')}");
  export default async function handler(request, response) {
    const data = await ${fileName}(request.query);
    response.status(200).json(data);
  }
  `;

  fs.writeFileSync(path.resolve(__dirname, `../${apiDir}/${fileName}.js`), js);
});
