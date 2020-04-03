//creates the html email
module.exports = (tweets) => {
    let tweetElements = '';
    //insert tweet data into elements
    tweets.forEach(tweet=>{
       tweetElements += `
                <div style = "width: 60%; border: 1px solid black; margin-bottom:5px; padding: 2px ">
                <p>@${tweet.user}</p>
                <p>${tweet.text}</p>
                <a style="color: black; text-decoration:none" href="${tweet.url}">Read Tweet => </a>
                </div>
               `
    })
    let email = `   
        <div style = "width: 600px;">
            ${tweetElements}
        </div>
    
    `;
    return email;
}
