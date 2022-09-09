const fs = require('fs');
const path = require('path');
const { getModules } = require('../src/utils');

const isExists = fs.existsSync(path.resolve(__dirname, '../apis'));

if (!isExists) {
  fs.mkdirSync(path.resolve(__dirname, '../apis'));
}

getModules().forEach(({ fileName, path: filepath }) => {
  const js = `
  const ${fileName} = require("../src${filepath.replace('.', '')}");
  export default async function handler(request, response) {
    const data = await ${fileName}(request.query);
    response.status(200).json(data);
  }
  `;

  fs.writeFileSync(path.resolve(__dirname, `../apis/${fileName}.js`), js);
});
