#!/usr/bin/env node
const path = require('path')
const request = require('request')
const fs = require('fs')
const process = require('process')

// 根据文件的url地址得到后缀，就是.jpg .mp3 .mp4之类的
const getSuffix = (str) =>
  str.slice(~str.lastIndexOf('.') ? str.lastIndexOf('.') : 0)

const downloadSingle = (url, dir = process.cwd(), title) => {
  if (!url) {
    console.error('请增加url')
    return
  }
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  if (!title) {
    // title没传的话，默认是url最后一个路径
    title = url.slice(url.lastIndexOf('/') + 1)
  } else {
    // title传的话，如果带后缀就不用管，没带后缀就补上
    title = title.includes('.') ? title : title + getSuffix(url)
  }
  const storePath = path.join(dir, title)

  request(url)
    .pipe(fs.createWriteStream(storePath))
    .on('close', () => {
      console.log(title + '下载完成', path.resolve(storePath))
    })
}

var argv = require('minimist')(process.argv.slice(2))
console.log(argv._)
argv._.length && downloadSingle(...argv._)

// const url = 'https://article-fd.zol-img.com.cn/t_s640x2000/g1/M03/02/02/ChMljl2ENKuIV553AAKEYP9wZOQAAP23wGEctEAAoR4006.jpg'
// downloadSingle(url)
// downloadSingle(url, __dirname, 'demo.png')
module.exports = downloadSingle
