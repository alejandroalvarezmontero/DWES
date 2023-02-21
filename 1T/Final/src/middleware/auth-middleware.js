
const jwt = require('jsonwebtoken');


function authMiddleware(req, res, next) {
  
  const authHeader = req.headers.authorization;

  if (!authHeader) {
 
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
     const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secreto');
   req.userData = { userId: decodedToken.userId }; next();
  } catch (error) {

    return res.status(401).json({ error: 'Token inválido' });
  }
}


module.exports = authMiddleware;
