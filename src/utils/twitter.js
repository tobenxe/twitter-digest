const Twitter = require('twitter-lite')
//should return a promise
module.exports = async () => { //TODO - Test error handling in this function
    
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
                                tweet_mode: 'extended'
                            })
    //extract the values needed
    const tweets = data.map(tweet=>{
        const fullText  = tweet.full_text;
        const linkIndex = fullText.lastIndexOf('https://');
        return {
            text: fullText.slice(0,linkIndex), 
            user:tweet.user.screen_name, 
            url: fullText.slice(linkIndex)
        }
    })
    return tweets;
     
}