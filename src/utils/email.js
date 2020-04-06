//creates the html email
module.exports = (tweets) => {
    let tweetElements = '';
    //insert tweet data into elements
    tweets.forEach(tweet=>{
       tweetElements += `
                <div style = "width: 100%; border: 1px solid black; margin-bottom:10px; padding: 10px ">
                <p>@${tweet.user}</p>
                <p>${tweet.text}</p>
                <a style="color: white; padding:5px; background: black; text-decoration:none" href="${tweet.url}">Read Tweet </a>
                </div>
               `
    })
    let email = `   
        <div style = "width: 40rem; font-size: 1.2rem; margin: 0 auto">
            ${tweetElements}
        </div>
    
    `;
 
    return email;
}
