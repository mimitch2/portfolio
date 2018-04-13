'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {
  $(document).ready(function() {
  var audio = $("#mahLegs")[0];
//   $("#jamesImg").click(function(){
// // audio.play();
// // });
// });

  $("#jamesImg").mousedown(function(){
audio.play();
$(this).toggleClass('scale');
  });
  $("#jamesImg").mouseup (function(){
$(this).toggleClass('scale');
  });


});
}
// });
