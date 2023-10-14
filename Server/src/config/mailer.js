const nodemailer = require("nodemailer");
const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;
const template = require('./template/template');

const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PASSWORD,
    },
  });
  return transporter;
};

const sendMail = async (user) => {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: '" Moveon 🏋️‍♀️" <moveonVerwalter@gmail.com>',
    to: user.email,
    subject: "Bienvenido 💪",
    html: template.htmlTemplate(user),
  });
  console.log("Message sent: %s", info.messageId);
  return
};

exports.sendMail = (user) => sendMail(user);
