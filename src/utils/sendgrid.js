//import api wrapper for sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_KEY); 
const email = require('./email');

module.exports = (tweets) => {
    return sgMail.send({
            to: process.env.MY_EMAIL,
            from: process.env.MY_EMAIL,
            subject: 'Your Tweet Digest',
            text: 'Here is your list digest',
            html: email(tweets),
            });
}