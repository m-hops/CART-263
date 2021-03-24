/**
ACTIVITY 8: CODE-TAKER++
MADELINE ZAYTSOFF

FEATURES ADDED TO PROGRAM:
1. RESKINNED VISUALS WITH CSS AND HTML
2. CREATED TWO DIALOG BOXES THAT CAN BE MOVED
3. REMOVED CLOSE BUTTON FROM DIALOGUE WINDOWS

*/

"use strict";

$(`#container`).dialog({
  dialogClass: "no-close",
});

$("#text-window").dialog({
  minHeight:700,
  minWidth:400,
  dialogClass: "no-close",
});

$(`#solved-dialog`).dialog({
  dialogClass: "no-close",
  autoOpen: false,
  buttons: {
    "Stop logging onto my computer": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  })
})

$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);

    if ($(this).text() === `Theremin`) {
      var success = new Audio('assets/sounds/tone.mp3');

      success.play();

      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
