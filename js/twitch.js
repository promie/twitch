$(document).ready(function(){

    const streamers = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'septiess', 'vihart', 'frinlet', 'Dr4xell', 'eisighul', 'SYNTAG', 'MeteorDev'];
    const noImageURL = 'http://www.iconninja.com/files/791/598/492/humans-person-social-users-profile-friends-account-icon.svg';

    clickEvents();

    streamers.forEach(streamer =>{
        $.getJSON(getChannelInfo(streamer), data=>{

            channelStatus(data);

            if(data.logo === null){
                $('.offline-streamer').append(`<div id="${data.display_name}" class="streamer"><a href="${data.url}" target="_blank"><img class="logo" src="${noImageURL}"></a><p class="streamerName">${stringFormat(data.display_name)}</p><p class="game"><span class="glyphicon glyphicon-remove-sign iconFormat" aria-hidden="true"></span></p></div>`)
            }else{
                $('.offline-streamer').append(`<div id="${data.display_name}" class="streamer"><a href="${data.url}" target="_blank"><img class="logo" src="${data.logo}"></a><p class="streamerName">${stringFormat(data.display_name)}</p><p class="game"><span class="glyphicon glyphicon-remove-sign iconFormat" aria-hidden="true"></span></p></div>`)
            }
        });
    });







}); //End $(document).ready(function())




const channelStatus = (data) =>{
    const name = data.display_name;

    $.getJSON(getStatus(name), data=>{
        
        if(data.stream !== null){
            console.log(data.stream.channel.url);
            $(`#${name}`).remove();
            $('.online-streamer').append(`<div class="streamer online"><a href="${data.stream.channel.url}" target="_blank"><img class="logo" src="${data.stream.channel.logo}"</a><p class="streamerName">${stringFormat(name)}</p><p class="game">Streaming: ${stringFormat(data.stream.game)}</p></div>`);
        }
    });

}

const getStatus = (streamersName) =>{

    const streamersURL = 'https://wind-bow.glitch.me/twitch-api/streams/';

    return `${streamersURL}${streamersName}`

}

const getChannelInfo = (streamersName) =>{
    
        const streamersURL = 'https://wind-bow.glitch.me/twitch-api/channels/';
    
        return `${streamersURL}${streamersName}`
    
}

const stringFormat = (text) =>{
    
    
    return `<strong>${text}</strong>`;
}

const clickEvents = () =>{

    $('#all-button').on('click', function(){
        $('.online-streamer').removeClass('hide')
        $('.offline-streamer').removeClass('hide')
    });
    
    $('#online-button').on('click', function(){
        $('.offline-streamer').addClass('hide')
        $('.online-streamer').removeClass('hide')        
    });
    
    $('#offline-button').on('click', function(){
        $('.online-streamer').addClass('hide')
        $('.offline-streamer').removeClass('hide')
    });
    
}








