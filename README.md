# Dlfile can download any file with url.

可以在任意路径下，运行命令下载任意一个资源。

## Installation

Install it as a command line tool via `npm -g`.

```sh
npm install dlfile -g
```

## Execution

```sh
// with url
$ dlfile url

// or with dir
$ dlfile url dir

// or with filename
$ dlfile url dir filename
```

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
