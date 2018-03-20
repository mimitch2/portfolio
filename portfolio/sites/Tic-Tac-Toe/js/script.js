'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {

  $(document).ready(function() {
    var data = [];

    $(this).find('.innerBox').click(function() {
      $(this).toggle();
      $(this).next().toggle().css({
        'display': 'flex'
      });

    });

    $(this).find('.x, .o, .clear').click(function() {
      $(this).parents('.popOver').toggle();
      $(this).parents('.popOver').prev().toggle();
      checkMove();
    });

    function checkMove() {

      if ($(event.target).hasClass('x')) {
        // xCount = 1;
        xVal = "x";
        $(event.target).parents('.popOver').prev().text(xVal);
        data.splice(0, 1, 'x');
        console.log('class = ' + xVal + "  array " + data);

      };

      if ($(event.target).hasClass('o')) {
        // oCount = 1;
        oVal = "o";
        data.splice(1, 1, 'o');
        console.log('class = ' + oVal + "  array " + data);
        $(event.target).parents('.popOver').prev().text(oVal);
      };
      if ($(event.target).hasClass('clear')) {
        console.log(" array " + data);
        // changeCounts();
        $(event.target).parents('.popOver').prev().text('');
      };
    }
  });
}

//  This or that use a variable
// var start= true  on first click
// if (start) is true "addCLass"
// then reset to !true and remove class
//
// $('[data-cell = 3]')
//
// need to alternate players
$('[data-cell]').click(function(){
var playerTurn

});



// check for win  there are 8 ways, so coamre them all in big conditional statement using && and ||




// });
