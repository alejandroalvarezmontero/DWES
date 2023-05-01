const SMTPServer = require('smtp-server').SMTPServer;
const nodemailer = require('nodemailer');

const server = new SMTPServer({
  authOptional: false, 
  onAuth(auth, session, callback) {
    if (auth.username === 'user' && auth.password === 'password') {
      return callback(null, { user: 'user' });
    }
    return callback(new Error('La contraseña o el usuario esta mal'));
  },
  onData(stream, session, callback) {
    let message = '';
    stream.on('data', (chunk) => {
      message += chunk;
    });
    stream.on('end', () => {
      const transporter = nodemailer.createTransport({
        host: 'alejandro.alvarezmontero@adaits.es',
        port: 587,
        secure: false,
        auth: {
          user: 'user',
          pass: 'password',
        },
      });
      const mailOptions = {
        from: 'alejandro.alvarezmontero@adaits.es',
        to: 'destination@example.com',
        subject: 'Nuevo email',
        text: message,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email guardado: ' + info.response);
        }
      });
      callback();
    });
  },
});

module.exports = {
  start: (port) => {
    server.listen(port, () => {
      console.log(`SMTP server listening on port ${port}`);
    });
  },
};
