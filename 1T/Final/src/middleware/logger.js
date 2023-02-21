function logger(req, res, next) {
    const { method, url } = req;
    const date = new Date().toISOString();
  
    console.log(`[${date}] ${method} ${url}`);
  
    next();
  }
  
  module.exports = logger;
  