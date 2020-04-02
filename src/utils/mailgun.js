//import api wrapper for mailgun
const mailgunJs = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});
//create the html email
const email = require('./email');
module.exports = (tweets) => {
    return new Promise((resolve, reject)=>{

          mailgunJs.messages().send({
                    from: process.env.MY_EMAIL,
                    to: process.env.MY_EMAIL,
                    subject: 'Your Tweet Digest',
                    html: email(tweets),
                    }, 
                 function (error, body) {
                 if(error) return reject(error);
                 console.log(body);
                 return resolve()
            })
    }  )
}