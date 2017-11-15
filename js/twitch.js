$(document).ready(function(){

    const streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'septiess', 'vihart', 'frinlet', 'Dr4xell', 'ExtremeModeration', 'eisighul', 'SYNTAG', 'MeteorDev'];
    const noImageURL = 'http://www.iconninja.com/files/791/598/492/humans-person-social-users-profile-friends-account-icon.svg';


    streamers.forEach(streamer =>{
        $.getJSON(getStatus(streamer), data=>{
            

            console.log(data.display_name);

            /*
            if(data.stream !== null){
                $(`#${data.channel.display_name}`)

            }

            */
            
        });
    });

    streamers.forEach(streamer =>{
        $.getJSON(getChannelInfo(streamer), data2=>{

            if(data2.logo === null){
                $('.offline-streamer').append(`<div id="${data2.display_name}" class="streamer"><a href="${data2.url}"><img class="logo" src="${noImageURL}"></a><p class="streamerName">${data2.display_name}</p><p class="game">Offline</p></div>`)
            }else{
                $('.offline-streamer').append(`<div id="${data2.display_name}" class="streamer"><a href="${data2.url}"><img class="logo" src="${data2.logo}"></a><p class="streamerName">${data2.display_name}</p><p class="game">Offline</p></div>`)
                console.log(data2);
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






