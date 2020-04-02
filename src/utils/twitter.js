const fetch = require('node-fetch');
//should return a promise
module.exports = async () => { //TODO - Test error handling in this function
       console.log('getting list tweets')
       const data = await fetch('https://api.twitter.com/1.1/lists/statuses.json', {
                            method: 'GET',
                            headers:{
                                Authorization: `Bearer ${process.env.TWITTER_KEY}`
                            },
                            body: JSON.stringify({
                                list_id: '1245290837988315136',
                                include_rts: false,
                            })
                     })
        if(data.ok){
            console.log(data, data.json())
            //extract the values needed
            const tweets = data.json().map(tweet=>{
                return {text: tweet.text, user:tweet.user.screen_name, url: tweet.entities.urls[0]}
            })
            console.log(tweets)
            return tweets;
        }else{
            throw new Error('Something went wrong while getting tweets')
        }
}