const Twitter = require('twitter-lite')
//should return a promise
module.exports = async () => { //TODO - Test error handling in this function
    console.log('getting list tweets')
    
    const user = new Twitter({
      consumer_key: process.env.TWITTER_KEY,
      consumer_secret: process.env.TWITTER_SECRET
    });
    const response = await user.getBearerToken();
    const app = new Twitter({
      bearer_token: response.access_token
    });
    //get tweets from list
    const data = await app.get('lists/statuses', {
                                list_id: '1245290837988315136',
                                include_rts: false,
                            })
    console.log({data})
    //extract the values needed
    const tweets = data.map(tweet=>{
        return {text: tweet.text, user:tweet.user.screen_name, url: tweet.entities.urls[0].url}
    })
    console.log({tweets})
    return tweets;
     
}