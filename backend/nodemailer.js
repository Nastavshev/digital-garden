import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'vasin.ogorod@yandex.ru',
      pass: 'biqwot-Damrir-sewpy8',
    },
  });

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

export default mailer;
