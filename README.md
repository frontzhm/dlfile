# Dlfile can download any file with url

It can download any file with url.
It can custom dir or filename.

可以在任意路径下，运行命令下载任意一个资源，可以自定义资源放在哪个目录里，也可以自定义文件名。

## Installation

Install it as a command line tool via `npm -g`.

```sh
npm install dlfile -g
```

## Execution

```sh
// with url  eg: dlfile https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/thank_you.png
$ dlfile url

// or with dir eg:dlfile https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/thank_you.png ./img
$ dlfile url dir

// or with filename eg:dlfile https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/thank_you.png ./img demo.png
$ dlfile url dir filename
```

filename also can have no suffix.

## require

It also can support function to download file.

```sh
npm i dlfile
```

```js
const dlfile = require('dlfile')
dlfile(url[,dir,filename])

```

## License

The MIT license.
