
const twitter = require('../utils/twitter');
const mailgun = require('../utils/mailgun');

exports.handler = async (event, context)=>{
         try{
             console.log(event.httpMethod, event.headers)
             //Validate the request method and the authorization header
             if(event.httpMethod != 'POST') return {statusCode: 404}
             //404 code for no reveal(401 works too but reveals that the endpoint exists, our cron job will 
             //always have its auth header set so we can safely assume any access w/o it is someone else.
             if(!event.headers.authorization !== process.env.AUTH_KEY)  return {statusCode: 404}
             //get tweets
             const tweets = await twitter();
             //send email
             await mailgun(tweets)
             // success
             return {statusCode: 200}
             
         }catch(err){
             console.log(err)
             //error
             return {statusCode: 500}
         }
}