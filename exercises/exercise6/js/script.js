"use strict";

/*****************

EXERCISE 6: RAVING REDACTIONIST++
MADELINE ZAYTSOFF

IMPROVEMENTS MADE TO ORIGINAL ACTIVITY:

1. STYLIZED WITH WITH CSS AND HTML
2. TEXT FLICKERING VIA CSS ANIMATION
3. MONITOR THE AMOUNT OF .REDACTED CLASS TO SWITCH OVER TO ANOTHER PAGE WHEN ALL IS REVEALED
4. UPDATED TEXT CONTENT
5. ADDED LISTENER TO LOOP BACK TO BEGINNING AFTER VIDEO FINISHES PLAYING

******************/

$('.top-secret').on('click',redact);

setInterval(revelation, 500);

function redact(event) {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

function revelation() {
  $('.redacted').each(attemptReveal);

}

function attemptReveal() {
  let r = Math.random();
  let n = $('.redacted').length;

  if (r <0.1) {
    console.log(n);

    $(this).removeClass('redacted');

    if (n <= 1){
      window.location.href = 'playVid.html'
    }

    $(this).addClass('revealed')
  }
}

var video = document.getElementById('simpsons');
video.onended = function() {
  window.location.href = 'index.html';
}
