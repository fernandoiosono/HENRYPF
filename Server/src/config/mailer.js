const nodemailer = require("nodemailer");
const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;

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

const sendMail = async (newUser) => {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: '" Moveon 🏋️‍♀️" <moveonVerwalter@gmail.com>',
    to: newUser.email,
    subject: "Bienvenido 💪",
    html: `<b>Bienvenido ${newUser.name} a nuestro equipo Moveon</b>`,
  });
  console.log("Message sent: %s", info.messageId);
  return
};

exports.sendMail = (newUser) => sendMail(newUser);
