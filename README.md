
<h1 align="center">Twitter Digest ✉️</h1>
<p align="center">
  <img width="460" height="320" src="https://i.imgur.com/Px4vvMY.gif" alt="twitter email digest gif">
</p>

A netlify lambda function to send you email digests of twitter lists.

I decided to create twitter digest to help me spend less time on social media. Particulary during the COVID-19 global pandemic. 

It is completely free to run.


Code Tutorial: https://tobenxe.com/building-a-netlify-lambda-function-to-turn-twitter-lists-into-email-digests/

## Requirements 

- A netlify account
- A sendgrid account + API key
- A twitter API key & API secret
- Some cron service to schedule the email. (https://cron-job.org/, https://easycron.com are some options if you don't have something already)
- An email [o_o]

## Usage
### 1) Deploy to Netlify 
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/tobenxe/twitter-digest"> <img src="https://www.netlify.com/img/deploy/button.svg"/> </a>

### 2) Fill in environment variables:
During the initial site setup at step 3 you should be able to set environment variables by clicking "show advanced" > "new variable". 
##### Basic Authorization:
```
Name:       Value:
AUTH_USER   <some made up but secure username>
AUTH_PASS   <some made up but secure password>
```
This helps provide some protection to the endpoint so only your cron job can access the function. The function checks for an authorization header in requests, it will use AUTH_USER and AUTH_PASS to work out what the appropriate header value a legitimate request would have. 

NOTE: This does not have to be your twitter user name or password, it is probably best if it isn't. 

Learn more about HTTP basic auth [here](https://tools.ietf.org/html/rfc7617#section-2).

##### Twitter Authentication
```
Name:           Value:
TWITTER_KEY     <twitter api key>
TWITTER_SECRET  <twitter api secret>
```
The function uses app only auth. You'll need a twitter developer account to get these.

##### Twitter List ID
```
Name:            Value:
TWITTER_LIST_ID  <twitter list id>
```
If you look in the address bar when you are on your list: eg. https://twitter.com/i/lists/1245290837988315136

The TWITTER_LIST_ID will be 1245290837988315136

##### Email
```
Name:      Value:
MY_EMAIL   <youremail>@<mailprovider>.<tld>
```
The email you'd like the digest to be sent to, for example johnnybravo@hotmail.com

NOTE: When you get the first email, you may have to check your spam folder initially and mark the email as "not spam"

##### Sendgrid Authentication
```
Name:          Value:
SENDGRID_KEY   <sendgrid api key>
```
Your API key from sendgrid. You can find a tutorial on how to get this [here](https://sendgrid.com/docs/ui/account-and-settings/api-keys/#creating-an-api-key)


### 3) Schedule request to the function

You can use any cron job service that allows HTTP basic authentication (most of them do). In the [tutorial](https://tobenxe.com/building-a-netlify-lambda-function-to-turn-twitter-lists-into-email-digests/) I used https://cron-job.org. You should specify a user and a password (should be the same as AUTH_USER and AUTH_PASS) to enable HTTP basic auth.

If you are using some other method (maybe your own server/machine) to schedule the request, you need to set the Authorization header (remember to encode your 'user:password' string after 'Basic ' to base64!).

## Local Development

Create a .env file in the root of the directory to store the environment variables.
Create a webpack.functions.js like the one [here](https://github.com/netlify/netlify-lambda/issues/118)
Run the following commands 
```
npm install
npm run start:lambda //to test locally
```

## Possible Todos/Ideas (contribution ideas):
- Add a since_id prop to the twitter API call in order to avoid getting duplicate tweets (would need some persistence of the id for the last fetched tweet, preferably free).
- Make the html email look nicer ? (looks simple enough already but maybe it could look better).
- Swap out sendgrid API for just smtp with nodemailer (or an alternative).
