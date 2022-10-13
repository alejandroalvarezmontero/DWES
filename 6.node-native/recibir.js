const fs = require ('fs');
const objeto = process.argv[2]
console.log(objeto)
try{
   const data =  fs.readFileSync( objeto, 'utf8')
    console.log(data)
} catch (err){
    console.error(err)
}