const Twitter = require('twitter-lite')
module.exports = async () => { 
    
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
                                list_id: process.env.TWITTER_LIST_ID,
                                tweet_mode: 'extended'
                            })
    //extract the values needed
    const tweets = data.map(tweet=>{
        return {
            text: tweet.full_text, 
            user:tweet.user.screen_name,
            url: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
        }
    })

    return tweets;
     
}