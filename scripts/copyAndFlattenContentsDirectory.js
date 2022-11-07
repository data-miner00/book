// References:
// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
// https://stackoverflow.com/questions/11293857/fastest-way-to-copy-a-file-in-node-js

const fs = require('fs')

var dirpath = process.argv[2]
var destination = process.argv[3]

console.log(`dirpath: ${dirpath}, destination: ${destination}`)

function getAllFiles(dir, files_) {
  files_ = files_ || []
  var files = fs.readdirSync(dir)
  for (var i in files) {
    var name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      getAllFiles(name, files_)
    } else {
      console.log('Detected file: ' + name)
      files_.push(name)
    }
  }
  return files_
}

function copyFilesToDir(files, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination)
  }

  files.forEach((fullQualifiedPath) => {
    var segments = fullQualifiedPath.split('/')
    var file = segments[segments.length - 1]

    fs.copyFile(fullQualifiedPath, `./${destination}/${file}`, (err) => {
      if (err) console.error(err)
      else console.log(`Successfully copied ${file} to ${destination}`)
    })
  })
}

var allFiles = getAllFiles(dirpath)

copyFilesToDir(allFiles, destination)
