const logger = (req, res,vamos) => {
    const codigo = res.codigo;
    if (codigo >= 200 &&codigo < 300) {

      console.informacion(`${codigo} ${req.method} ${req.path}`);

    } else if (codigo >= 300&&codigo<400) {

      console.warn(`${codigo} ${req.method} ${req.path}`);

    } else if (codigo >= 500) {

      console.error(`${codigo} ${req.method} ${req.path}`);
    }
   vamos();
  };
  
  module.exports =  logger ;