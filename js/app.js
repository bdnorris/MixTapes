// http://codesamplez.com/programming/control-html5-audio-with-jquery

$('.play').click(function() {
  $(".player").trigger('play');
});

$('.pause').click(function() {
  $(".player").trigger('pause');
});


var numberOfTracks = ($('.player').length);

console.log(numberOfTracks);

$('.player').on('ended', function() {
  //var curID = $('.player').attr('id');
  //alert(curID);
  //curID++;
  //var nextTrack = $('.player').next('.player');
  //console.log(nextTrack);
   $('.player').next().trigger('play');

   // enable button/link
});


function stopAudio(){
  //pause playing
  $(".player").trigger('pause');
  //set play time to 0
  $(".player").prop("currentTime",0);
}

function volumeUp(){
    var volume = $(".player").prop("volume")+0.2;
    if(volume >1){
        volume = 1;
    }
    $(".player").prop("volume",volume);
}

function volumeDown(){
    var volume = $(".audioDemo").prop("volume")-0.2;
    if(volume <0){
        volume = 0;
    }
    $(".player").prop("volume",volume);
}

function toggleMuteAudio(){
    $(".player").prop("muted",!$(".player").prop("muted"));
}
