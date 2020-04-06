
<h1 align="center">Twitter Digest ✉️</h1>
<p align="center">
  <img width="460" height="320" src="https://i.imgur.com/Px4vvMY.gif" alt="twitter email digest gif">
</p>

A netlify lambda function to send you email digests of twitter lists.

I decided to create twitter digest to help me spend less time on social media. Particulary during the COVID-19 global pandemic. 

It is completely free to run.


Code Tutorial: https://toberej.com/building-a-netlify-lambda-function-to-turn-twitter-lists-into-email-digests/

## Requirements 

- A netlify account
- A sendgrid account + API key
- A twitter developer account + API key & secret
- Some cron service to schedule the email. (https://cron-job.org/, https://easycron.com are some options if you don't have something already)
- An email [o_o]

## Usage
### Deploy to Netlify 
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/toberej/twitter-digest"> <img src="https://www.netlify.com/img/deploy/button.svg"/> </a>

### Fill in environment variables:
##### Basic Authorization:
```
AUTH_KEY = <basic auth key>

```
 This helps provide some protection to the endpoint so only your cron job can send you an email.


All you need to do is make up a username and password, join them using a colon and encode the resulting string to base64 (important!).

*In essence:*
AUTH_KEY = encodetobase64("madeupusername:madeuppassword")

NOTE: This does not have to be your twitter user name or password. You will also need to set an authorization header (basic) in your cron job when sending requests.

Learn more about HTTP basic auth [here](https://tools.ietf.org/html/rfc7617#section-2).

##### Twitter Authentication
```
TWITTER_KEY = <twitter api key>
TWITTER_SECRET = <twitter api secret>
```
The application uses app only auth. You'll need a twitter developer account to get these.

##### Twitter List ID
```
TWITTER_LIST_ID = <twitter list id>
```
For example if you look in the address bar when you are on your list:
https://twitter.com/i/lists/1245290837988315136
The TWITTER_LIST_ID will be 1245290837988315136

##### Email
```
MY_EMAIL = <youremail>@<mailprovider>.<tld>
```
The email you'd like the digest to be sent to. 

NOTE: When you get the first email, you may have to check your spam folder initially and mark the email as "not spam"

##### Sendgrid Authentication
```
SENDGRID_KEY = <send grid api key>
```
Your API key from sendgrid. You can find a tutorial on how to get this [here](https://sendgrid.com/docs/ui/account-and-settings/api-keys/#creating-an-api-key)



## Ideas for improving (contribution ideas):
- Add a since_id prop to the twitter API call in order to avoid getting duplicate tweets (would need some persistence of the id for the last fetched tweet, preferably free)
- Make the html email look better

