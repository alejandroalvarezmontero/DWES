const pageMiddleware = (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
  
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    const results = {};
  
    if (endIndex < db.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
  
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
  
    results.results = db.slice(startIndex, endIndex);
  
    res.paginatedResults = results;
    next();
  };
  
  module.exports = pageMiddleware;
  