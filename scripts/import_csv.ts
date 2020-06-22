const fs = require('fs');
const util = require('util');
const Papa = require('papaparse')

// フレームデータのCSVを読み込む
// 引数には data/***.csvを指定
let csvData = fs.readFileSync(process.argv[2], 'utf-8');
let result = Papa.parse(csvData, { delimiter: "," })
fs.writeFile(`data/json/${process.argv[2].split('/')[1].split('.')[0]}.json`, util.inspect(result.data), (err) => {
  if(err) console.log(err);
});