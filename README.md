# Twitchtv JSON API
Free Code Camp Intermediate Project.
The objective of this project is to acquire information from the Twitch API. The $.getJSON() method was used for this project.

The real challenge is using two different URL for the API calls to make them linked.
This project took longer than expected especially the planning part on how to structure.

What I've learnt in this project is writing an HTML element within the javascript which I will be greatly utilise for future projects.

```
const displayInformation = (data) =>{

    const noImageURL = 'http://www.iconninja.com/files/791/598/492/humans-person-social-users-profile-friends-account-icon.svg';
        
    if(data.logo === null){
        $('.offline-streamer').append(`<div id="${data.display_name}" class="streamer"><a href="${data.url}" target="_blank"><img class="logo" src="${noImageURL}"></a><p class="streamerName">${stringFormat(data.display_name)}</p><p class="game"><i class="fa fa-ban iconFormat" aria-hidden="true"></i></p></div>`)
    }else{
        $('.offline-streamer').append(`<div id="${data.display_name}" class="streamer"><a href="${data.url}" target="_blank"><img class="logo" src="${data.logo}"></a><p class="streamerName">${stringFormat(data.display_name)}</p><p class="game"><i class="fa fa-ban iconFormat" aria-hidden="true"></i></p></div>`)
    }
```

Another useful functionality is is the function which include the list of clickEvents to tricker (adding and removing) CSS classes.

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
Shout out again to my mentor, Tony Johnson, for providing guidance on the structure and the refactoring of the final javascript code.

### About the App
This app returns the information based on the channels information of which include the logos, display name, offline and online status

The users have the ability to find information on the Wikipedia database based on the search.
The information returns the header, information and hyperlink to the actual Wikipedia page.

Check out the completed projected - [Twitchtv JSON API](https://promie.github.io/twitch/)

### Preview
![alt text](https://github.com/promie/twitch/blob/master/img/preview.JPG "Main App")
