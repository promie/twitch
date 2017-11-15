$(document).ready(function(){

    const streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'septiess', 'vihart', 'frinlet', 'Dr4xell', 'ExtremeModeration', 'eisighul', 'SYNTAG', 'MeteorDev', 'texEira'];
 
    streamers.forEach(streamer =>{
        $.getJSON(getStatus(streamer), data=>{
            
            //API for status
            
        });
    });

    streamers.forEach(streamer =>{
        $.getJSON(getChannelInfo(streamer), data2=>{

            $('.')
          
            
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






