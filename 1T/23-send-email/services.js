const nodemailer = require('nodemailer');

 let configGlobalSMTP = null;
 let transporter = null;

 function createTransport(configSMTP) {
 configGlobalSMTP = configSMTP;
 const config = {
 host: configSMTP.host,
 port: configSMTP.port,
 secure: false,
 auth: {
 user: configSMTP.user,
 pass: configSMTP.pass,
 }
 };

 const transporter = nodemailer.createTransport(config);

 transporter.verify((error) => {
 if (error) {
 logger.error(`transporter general verify error: ${error}`);
 } else {
 logger.info('Server is ready to take our messages');
 }
 });
}

 function send({ message }, useDefault) {

 if (!transporter) {
 const error = new Error(`Bad SMTP source email: ${smtpUser}`);
 error.responseCode = 550;
 throw error;
 
}
return transporter.sendMail({from: configGlobalSMTP.auth.user, ...message});
 }

 module.exports = { createTransport, send };