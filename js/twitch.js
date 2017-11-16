$(document).ready(function(){

    const streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'septiess', 'vihart', 'frinlet', 'Dr4xell', 'ExtremeModeration', 'eisighul', 'SYNTAG', 'MeteorDev'];
    const noImageURL = 'http://www.iconninja.com/files/791/598/492/humans-person-social-users-profile-friends-account-icon.svg';



    streamers.forEach(streamer =>{
        $.getJSON(getChannelInfo(streamer), data=>{

            channelStatus(data);

            if(data.logo === null){
                $('.offline-streamer').append(`<div id="${data.display_name}" class="streamer"><a href="${data.url}"><img class="logo" src="${noImageURL}"></a><p class="streamerName">${data.display_name}</p><p class="game">Offline</p></div>`)
            }else{
                $('.offline-streamer').append(`<div id="${data.display_name}" class="streamer"><a href="${data.url}"><img class="logo" src="${data.logo}"></a><p class="streamerName">${data.display_name}</p><p class="game">Offline</p></div>`)
            }
        });
    });

    //Bugs need to be fixed in this section. Can't access the array list of streamers
    const channelStatus = (data) =>{
        const name = data.display_name;
    
        $.getJSON(getStatus(streamer), data=>{
            
            if(data.stream !== null){
                
                $(`#${name}`).remove();
                $('.online-streamer').append(`<div class="streamer online><a href="${data.stream.channel.url}"><img class="logo" src="${data.stream.channel.logo}"</a><p>${name}</p><p class="game">${data.stream.game}</p></div>`);
    
    
            }
        });
    
    }



}); //End $(document).ready(function())



const getStatus = (streamersName) =>{

    const streamersURL = 'https://wind-bow.glitch.me/twitch-api/streams/';

    return `${streamersURL}${streamersName}`

}

const getChannelInfo = (streamersName) =>{
    
        const streamersURL = 'https://wind-bow.glitch.me/twitch-api/channels/';
    
        return `${streamersURL}${streamersName}`
    
}






