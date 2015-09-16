// http://codesamplez.com/programming/control-html5-audio-with-jquery

var numberOfTracks = ($('.player').length);
console.log(numberOfTracks);


var tracks = ['GrandBlood.mp3', 'Segue5.mp3']
console.debug(tracks);

$.each(tracks, function(key, value) {
  $('#playlist').append('<button id="'+value+'">'+value+'</button>');
/*
    $('#audio').append('<audio controls preload="auto" class="player" id="'+value+'"><source src="'+value+'" type="audio/mpeg;" codecs="mp3"></audio>');
    */
});

$('#playlist button').click(function(){
  $('#playlist button').removeClass('active');
  var track = $(this).attr('id');
  console.log(track);
  $('.player').attr('src',track).trigger('play');
  $('.player').addClass('active');
  $(this).addClass('active');
});

// Adds first and last classes automatically
$('#playlist button').first().addClass('first');
$('#playlist button').last().addClass('last');


$('.player').on('ended', function() {

});

/*
$('.play').toggle(function() {
  $(".player").trigger('play');
});


$('.pause').click(function() {
  $(".player").trigger('pause');
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
*/
