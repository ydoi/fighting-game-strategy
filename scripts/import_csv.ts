const fs = require('fs');
const util = require('util');
const Papa = require('papaparse')

// フレームデータのCSVを読み込む
// 引数には data/***.csvを指定
let csvData = fs.readFileSync(process.argv[2], 'utf-8');
let result = csvData.split("\r\n").map(line => { return line.split(',') });
fs.writeFile(`data/json/${process.argv[2].split('/')[1].split('.')[0]}.json`,
  JSON.stringify(result),
  (err) => {
    if(err) console.log(err);
  }
);