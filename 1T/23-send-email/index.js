"use strict";
const nodemailer = require("nodemailer");

async function main() {
  
  
  let testAccount = await nodemailer.createTestAccount();

  
  let transporter = nodemailer.createTransport({
     service: 'gmail',
     secure: false,
     auth: {
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS
     }
    });

  
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', 
    to: "bar@example.com, baz@example.com", 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
  

 
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
}

main().catch(console.error);
