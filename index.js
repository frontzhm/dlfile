// const async = require('async')
const path = require('path')
const request = require('request')
const fs = require('fs')

// 根据文件的url地址得到后缀，就是.jpg .mp3 .mp4之类的
const getSuffix = (str) => str.slice(~str.lastIndexOf('.') ? str.lastIndexOf('.') : 0)

const downloadSingle = (url, dir = __dirname, title) => {
  if (!title) {
    // title没传的话，默认是url最后一个路径
    title = url.slice(url.lastIndexOf('/') + 1)
  } else {
    // title传的话，如果带后缀就不用管，没带后缀就补上
    title = title.includes('.') ? title : (title + getSuffix(url))
  }
  const storePath = path.join(dir, title)

  request(url)
    .pipe(fs.createWriteStream(storePath))
    .on('close', () => {
      console.log('已完成')
    })
}
const process = require('process')
console.log(process.argv)
console.log(process.argv.slice(2))
process.argv.slice(2).length && downloadSingle(...process.argv.slice(2))

// const url = 'https://article-fd.zol-img.com.cn/t_s640x2000/g1/M03/02/02/ChMljl2ENKuIV553AAKEYP9wZOQAAP23wGEctEAAoR4006.jpg'
// downloadSingle(url)
// downloadSingle(url, __dirname, 'demo.png')
module.exports = downloadSingle
