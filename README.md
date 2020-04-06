# Twitter Digest ✉️
---
A netlify lambda function to send you email digests of twitter lists.

I decided to create twitter digest to help me spend less time on social media. Particulary during the COVID-19 global pandemic. 

It is completely free to run.


Project link/docs: [insert project link when done]
Code Tutorial: https://toberej.com/building-a-netlify-lambda-function-to-turn-twitter-lists-into-email-digests/]

## Requirements 

- A netlify account
- A sendgrid account + API key
- A twitter developer account + API key & secret
- Some cron service to schedule the email. (https://cron-job.org/, https://easycron.com are some options if you don't have something already)
- An email [o_o]

## Usage

## Ideas for improving (contribution ideas):
- Add a since_id prop to the twitter API call in order to avoid getting duplicate tweets (would need some persistence of the id for the last fetched tweet, preferably free)
- Make the html email look better

