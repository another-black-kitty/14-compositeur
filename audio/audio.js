window.onload = function(){

  var myAudio = document.getElementById('audio-demo');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  var loading = document.getElementById('loading');
  var bar = document.getElementById('bar');

  function displayControls() {
     loading.style.display = "none";
     play.style.display = "block";
  }

  if (myAudio.paused) {
     displayControls();
  } else {
     myAudio.addEventListener('canplay', function() {
        displayControls();
     });
  }
   
  play.addEventListener('click', function() {
     myAudio.play();
     play.style.display = "none";
     pause.style.display = "block";
  });
   
  pause.addEventListener('click', function() {
     myAudio.pause();
     pause.style.display = "none";
     play.style.display = "block";
  });
   
  //progress
   
  myAudio.addEventListener('timeupdate', function() {
     bar.style.width = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10) + "%";
  });
 
 var progress = document.getElementById('progress');

progress.addEventListener('click', function(e) {
 var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
 var clickTime = clickPosition * myAudio.duration;
 myAudio.currentTime = clickTime;
});

}//end of onload