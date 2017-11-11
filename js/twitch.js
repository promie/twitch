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

    const streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'];
    const followerURL = 'https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels';

    //Adding some more streamers --> solution for CORS issue is to use datatype of 'jsonp'

    $.ajax({
        type: 'GET',
        url: followerURL,
        contentType: 'application/json; charset=utf-8',
        async: false,
        dataType: 'jsonp',
        success: data =>{

            data.forEach(name =>{
                streamers.push(data.follows[name].channel.display_name)
            });
            
        }
    }); //End ajax call

    console.log(streamers);
    
}); //End $(document).ready(function())






