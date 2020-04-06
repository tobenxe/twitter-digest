//import api wrapper for sendgrid
const sgMail = require('@sendgrid/mail');
const createHtmlEmail = require('./email');
sgMail.setApiKey(process.env.SENDGRID_KEY); 

module.exports = (tweets) => {
    return sgMail.send({
            to: process.env.MY_EMAIL,
            from: process.env.MY_EMAIL,
            subject: 'Your Tweet Digest',
            text: 'Here is your list digest',
            html: createHtmlEmail(tweets),
            });
}