const fs = require("fs");

const nodemailer = require("nodemailer");
const svgCaptcha = require("svg-captcha");

// use node_mailer
const send_email = async () => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.anggaalfiansah.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "YOUR EMAIL",
      pass: "YOUR_PASSWORD",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "'YOUR ALIAS' YOUR EMAIL", // sender address
    to: "example@example.com, example2@example.com, example3@example.com, example4@example.com", // list of receivers
    subject: "Test Nodemailer", // Subject line
    text: "Test", // plain text body
    html: "<b>Hello world</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

// use svg-captcha
const create_captcha = () => {
  const captcha = svgCaptcha.create({ size: 10, noise: 10 });
  fs.writeFile(`${captcha.name}.svg`, captcha.data, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
};
