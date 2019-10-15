$(document).ready(function(){
  $('.nav-button').click(function(){
  $('body').toggleClass('nav-open');
  });


  // MRP.insert({
  //   'url':'https://mszwhisper.radioca.st/;',
  //   'lang':'en',
  //   'codec':'mp3',
  //   'volume':80,
  //   'autoplay':true,
  //   'forceHTML5':true,
  //   'jsevents':true,
  //   'buffering':0,
  //   'title':'WhisperRadio',
  //   'wmode':'transparent',
  //   'skin':'darkconsole',
  //   'width':190,
  //   'height':62
  // });


  Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "WHISPER RADIO STREAM",
        "artist": "KaOus",
        "album": "Album Name",
        "url": "https://mszwhisper.radioca.st/;",
        "cover_art_url": "/assets/images/avatar.jpg"
      },
    ]
  });

  // Amplitude.init({
  //   "bindings": {
  //     37: 'prev',
  //     39: 'next',
  //     32: 'play_pause'
  //   },
  //   "songs": [
  //     {
  //       "name": "Risin' High (feat Raashan Ahmad)",
  //       "artist": "Ancient Astronauts",
  //       "album": "We Are to Answer",
  //       "url": "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
  //       "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
  //     }
  //   ]
  // });

  window.onkeydown = function(e) {
    return !(e.keyCode == 32);
  };

  /*
    Handles a click on the song played progress bar.
  */
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });

});

