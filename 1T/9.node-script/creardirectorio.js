var cp = require('cp');

var dir = process.argv[2];

if (!cp.existsSync('files')) {
    cp.mkdirSync('files');
}
cp.mkdirSync('files/' + dir);