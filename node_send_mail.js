var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bkarthik530@gmail.com',
    pass: 'k875454337'
  }
});

var mailOptions = {
  from: 'bkarthik530@gmail.com',
  to: 'karthik.kaka89@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was Tough!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});