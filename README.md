# Twitchtv JSON API
Free Code Camp Intermediate Project.
This is the final API project for Free Code Camp Intermediate Project. The objective of this project is to acquire information from the Twitch database through an API. The $.getJSON() method was used.

The real challenges for this project are:
* Two different functions calling two APIs and create a linkage of information between the two.
* HTML and CSS styling within the twitch.js

Reflection on what I've learnt:

Writing an HTML element within javascript

```
const displayInformation = (data) =>{
        
    if(data.logo === null){
        $('.offline-streamer').append(`<div id="${data.display_name}" 
        class="streamer"><a href="${data.url}"target="_blank">
        <img class="logo" src="${noImageURL}"></a>
        <p class="streamerName">${stringFormat(data.display_name)}</p>
        <p class="game"><i class="fa fa-ban iconFormat" aria-hidden="true"></i></p></div>`)
    }else{
        $('.offline-streamer').append(`<div id="${data.display_name}" 
        class="streamer"><a href="${data.url}" target="_blank">
        <img class="logo" src="${data.logo}"></a>
        <p class="streamerName">${stringFormat(data.display_name)}</p>
        <p class="game"><i class="fa fa-ban iconFormat" aria-hidden="true"></i></p></div>`)
    }
```

Filtering buttons with jQuery with the CSS 'addClass' and 'removeClass'

```
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
```
Shout out again to my mentor, Tony Johnson, for providing guidance on the structure and refactor session prior to the submission of this project. 

### About the App
This app provides information for the Twitch channels whether the channel is offline or online. If online,the information on what the channel is currently displaying will be displayed. Users can click on the link to view the live streaming straight from the Twitch website.

Check out the completed projected - [Twitchtv JSON API](https://promie.github.io/twitch/)

### Preview
![alt text](https://github.com/promie/twitch/blob/master/img/preview.JPG "Main App")
