// http://codesamplez.com/programming/control-html5-audio-with-jquery

var numberOfTracks = ($('.player').length);
console.log(numberOfTracks);

// Adds first and last classes automatically
$('.player').first().addClass('first');
$('.player').last().addClass('last');

// Makes the next track play after end, or start over on the first track if it's the last track.
$('.player').on('ended', function() {
  if ($(this).hasClass('last')) {
    $('.first').trigger('play');
  }
  else {
    $('.player').next().trigger('play');
  }
});


/*
$('.play').toggle(function() {
  $(".player").trigger('play');
});


$('.pause').click(function() {
  $(".player").trigger('pause');
});
*/

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
