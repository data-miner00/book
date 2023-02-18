var fs = require('fs')

var directory = process.argv[2]

fs.rmSync(directory, { recursive: true, force: true })
