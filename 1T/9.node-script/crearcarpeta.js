var cp = require('cp'); 
if (!cp.existsSync('files'))
{ cp.mkdirSync('files'); }