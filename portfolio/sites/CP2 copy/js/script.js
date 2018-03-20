'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {

  $(document).ready(function() {

    $(".intro").css({
      display: 'flex'
    }).animate({
      opacity: '1.0',
      left: '0px'
    }, 1000);
    $(".introTwo").css({
      display: 'flex'
    }).animate({
      opacity: '1.0',
      right: '0px'
    }, 1000);
    $(".introThree").css({
      display: 'flex'
    }).animate({
      opacity: '1.0',
      left: '0px'
    }, 1000); //all three above animates in about sections on page load FIXME how do I prevent this on EVERY page load?
    $('.introImages').delay(750).toggle(500);
    $("#projects").delay(200).animate({
      opacity: 1.0
    }, 800);
    $("#about").delay(200).animate({
      opacity: 1.0
    }, 800);
    $("#nameHeader").delay(400).animate({
      opacity: 1.0
    }, 800); //all three above fade in header and nav text on page load FIXME how do I prevent this on EVERY page load?



    $('#projects').click(function() { //animates intro sections out and       projects section in on click

      $("*").animate({
        scrollTop: 0}, "fast")
       //scrolls to top of screen before animation FIXME how to complete this first, then do the rest of the animations?


      $(this).toggleClass("active"); //changes nav text based on click by adding a class, then removing it next click plus changes dealys for animations based on state
      if ($(this).hasClass("active")) {

        $(this).text("Information");
        $('.wrapper').fadeToggle(500);
        $('.target').css({
          display: 'flex'
        });
        $('.introImages').toggle(500);
        $('.intro, .introTwo, .introThree').delay(300).toggle(750);
        // $('.introText').delay(300).toggle(750);


      } else {
        $(this).text("Projects");
        $('.wrapper').fadeToggle(500);
        $('.target').css({
          display: 'flex'
        });
        $('.intro, .introTwo, .introThree').toggle(750);
        $('.introImages').delay(500).toggle(500);
      }

    });


    $('#about').click(function() { //change text and show about screen and hide everythign else
      $(this).toggleClass("aboutActive");

      if ($(this).hasClass("aboutActive")) {

        $('.all').fadeToggle(300);
        $('footer').fadeToggle(300);

        $('#projects').fadeToggle();
        $('#about').fadeToggle(function() {
          $('#about').css({
            marginRight: '40px',
            fontSize: '1.7rem'
          });
          $(this).text("Exit");
          $('#about').fadeToggle(500);
          $('.about').animate({
            height: 'toggle', opacity: 'toggle'
          }, 500);
          $('.about').css({
            display: 'flex'
          });
        });

      } else {

        $('.about').animate({
          height: 'toggle', opacity: 'toggle'
        }, 500, function() {
          $('.all').fadeToggle(1000);
          $('footer').fadeToggle(1000);
        });

        $('#about').fadeToggle('500', function() { //callback set  to hide jerky animations
          $('#about').css({
            fontSize: '1.4rem'
          });
          $(this).text("About");
          $('#about').delay().fadeToggle(500);
          $('#projects').delay().fadeToggle(500);

        });
      }

    });

    // NOTE!!!!!!!!! I found a plug-in that prevents the firing of a hover event until the cursor slows down called "hoverIntent". I don't want you to think I am taking credit for it ;-). I did change the default wait time in the linked file, but that's it. everyhting else below I did.

    if (!!('ontouchstart' in window)) { //auto-show hover stuff on mobile
      $(this).prev().addClass('animate'); //finds sibling 2 steps before (the img) and adds a class to fire a css transition (scale)
      $(this).find('.innerText').stop().fadeToggle(500); //finds and fades in both .innerText (descendant) elements

    } else {
      $(this).find('.target').hoverIntent(function() { //finds the current .target being hovered over so they don't all fire
        $(this).prev('.mainImg').animate({
          opacity: .7
        }); //sets first sibling up (.mainImg)'s opacity to .7
        $(this).prev().addClass('animate'); //finds sibling 1 step before (the img) and adds a class to fire a css transition (scale)
        $(this).find('.innerText').stop().fadeToggle(500); //finds and fades in both .innerText (descendant) elements
      }, function() { //next part reverses all of the above on hover off
        $(this).prev().removeClass('animate');
        $(this).find('.innerText').stop().fadeToggle(30);
        $(this).prev('.mainImg').stop().animate({
          opacity: 1.0
        }, 100);
      });
    }
  });

}
// });
