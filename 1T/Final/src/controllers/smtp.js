const SMTPServer = require('smtp-server').SMTPServer;
const nodemailer = require('nodemailer');

// Set up SMTP server configuration
const server = new SMTPServer({
  authOptional: false, // require authentication
  onAuth(auth, session, callback) {
    if (auth.username === 'user' && auth.password === 'password') {
      return callback(null, { user: 'user' });
    }
    return callback(new Error('Invalid username or password'));
  },
  onData(stream, session, callback) {
    let message = '';
    stream.on('data', (chunk) => {
      message += chunk;
    });
    stream.on('end', () => {
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
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
        subject: 'New email received',
        text: message,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email forwarded successfully: ' + info.response);
        }
      });
      callback();
    });
  },
});

// Export the SMTP server as a module
module.exports = {
  start: (port) => {
    server.listen(port, () => {
      console.log(`SMTP server listening on port ${port}`);
    });
  },
};
