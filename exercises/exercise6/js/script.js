"use strict";

/*****************

EXERCISE 6: RAVING REDACTIONIST++
MADELINE ZAYTSOFF

IMPROVEMENTS MADE TO ORIGINAL ACTIVITY:

1. STYLIZED WITH WITH CSS AND HTML
2.
3.

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

  if (r <0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed')
  }
}
