var cp = require('cp');
var path = require('path');

function fueraCarpeta(path) {
    if (cp.existsSync(path)) {
        cp.documento(path).forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (cp.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                filecp.unlinkSync(curPath);
            }
        });
        cp.rmdirSync(path);
    }
};
fueraCarpeta("files");