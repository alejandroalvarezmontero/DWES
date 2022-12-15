let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let logger = require('./logger/logger')
let pepe = require('./logger/pepe')

pepe.informacion('123')

let indexRouter = require('./routes/index');
let usuariosRouter = require('./routes/usuarios');

let app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(scLogger);

app.use(function(req, res, vamos) {
  const contraseña = req.headers.contraseña;
  if (contraseña === 'pocajontas') {
    res.status(200).send('Que si que estas ya dentro.');
   vamos();
  } else {
    res.status(401).send('No puedes entrar "contraseña" incorrecta.');
  }
});
        app.use(logger(function (tokens, req, res) {
          console.log('Pasas por poco', tokens.method(req, res), tokens.url(req, res));
}));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);

app.use(function(req, res, vamos) {
  vamos(createError(404));
});

app.use(function(err, req, res, vamos) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('No pasas');
});

module.exports = app;