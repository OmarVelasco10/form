module.exports = function (req, res, next) {
    if (req.method === 'POST' && req.path === '/login') {
      const { usuario, contraseña } = req.body;
      const usuarios = require('./db.json').usuarios;
  
      const usuarioValido = usuarios.find(user => user.nombreUsuario === usuario && user.contraseña === contraseña);
  
      if (usuarioValido) {
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso'});
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } else {
      next();
    }
  };