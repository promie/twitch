// First Part --> Get Free Code Camp Status and Hyperlink use the $.ajax() call


//Check whether the free code camp is online or offline
// API for Free Code Camp --> https://wind-bow.glitch.me/twitch-api/streams/freecodecamp


// Second Part --> Get the followers status and hyper link

//API for Free Code Camp Followers --> https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels

// Return the display name of the followers and put push it into an new array

// https://wind-bow.glitch.me/twitch-api/channels/[list of Streamers]

//Loop through that new array and use call API the third time to loop through the new array to get the logo, info and status

// Third API call --> https://wind-bow.glitch.me/twitch-api/streams/[followersname]/?callback=?;


$(document).ready(function(){

    const streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'septiess', 'vihart', 'frinlet', 'Dr4xell', 'ExtremeModeration', 'eisighul', 'SYNTAG', 'MeteorDev', 'texEira'];
 
    streamers.forEach(streamer =>{
        $.getJSON(getStatus(streamer), data=>{
            
            if(data.stream === null){
                console.log(`${streamer} is currently OFFLINE`);
            }else{
                console.log(`${streamer} is currently ONLINE`);
            }
            
        });
    });

    streamers.forEach(streamer =>{
        $.getJSON(getChannelInfo(streamer), data2=>{

            if(data2.error){
                console.log(`${streamer} no longer exists`);
            }
            
        });
    });

}); //End $(document).ready(function())

const getStatus = (streamersName) =>{

    const streamersURL = 'https://wind-bow.glitch.me/twitch-api/streams/';

    return `${streamersURL}${streamersName}`

}

const getChannelInfo = (streamersName) =>{
    
        const streamersURL = 'https://wind-bow.glitch.me/twitch-api/channels/';
    
        return `${streamersURL}${streamersName}`
    
}
    







