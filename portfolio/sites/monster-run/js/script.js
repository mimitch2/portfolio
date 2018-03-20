'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {

  $(document).ready(function() {

    //for moveMonster and CPS
    var tempMPH = 0;
    var count = 0;

    //for update() function
    var lastSpeed = 0;
    var speed = 1200;
    var mph = 0;
    var backgroundSpeed = 1000;

    //to determin if loopMonster() funciton should start
    var intervalSwitch = false;

    //for loopMonster() function
    var frames = $('.animation').children();
    var frameCount = frames.length;
    var i = 0;

    //for backgroundMove() function
    var x = 0;

    // store cash and click amount
    var cash = 0;
    var clicks = 0;
    var factor = 1;

    //keep values for buttons
    var clickPriceValue = .01; // 1.00
    var pushPriceValue = .01; //2.00
    var autoPushPriceValue = .01; //3.00

    // for taco animation start
    var tacoSwitch = false;

    //FIXME change timer back to 100 ALSO find way to only updateText when something changes
    setInterval(updateText, 1000);

    setInterval(arrow, 500);

    function arrow() {
  $('#downArrow').toggleClass('arrowScale');

    }


    function updateText() {
      $('.money').text('$' + cash.toFixed(2)); //update cash text
      $('.mph').text(tempMPH + mph + "MPH"); //update mph text
      $('#click-price-value').text(clickPriceValue.toFixed(2));
      $('#push-price-value').text(pushPriceValue.toFixed(2));
      $('#autoPush-price-value').text(autoPushPriceValue.toFixed(2));
      $('.click-counter').text('Clicks=' + clicks);
      x = $('.animation').css("background-positionX");
      // console.log(factor);
      // console.log(speed);
    } //close updateText() function


    getCPS();

    function getCPS() { //calculates clicks per second to get tempMPH
      setTimeout(function() {
        tempMPH = count;
        count = 0;
        getCPS();
      }, 1000);
    }

    $('.taco1').mousedown(function() {
      $('.taco1').hide();
      $('.taco2').css({
        display: 'block'
      });
      clicks += 1;
      x = parseInt(x); //get just integer from x
      x -= 1; //increase by whole numbers only
      moveMonster();
      cashMoney();
      $('.animation').css('background-position', x + 'px 0');
      tempMPH++;
      tempMPH = tempMPH * 1.2;
      tempMPH = Math.round(100 * tempMPH) / 100; //round to 100th
    });

    $('.taco2').mouseup(function() {
      $('.taco1').show();
      $('.taco2').hide();

    });


    function clickOnce() {
      if (autoPushSpeed > 500) {
        $('.taco1').hide();
        $('.taco2').css({
          display: 'block'
        });

        setTimeout(delayTaco, 200)

        function delayTaco() {
          $('.taco1').stop().show();
          $('.taco2').stop().hide();
        }

      } else {

        if (tacoSwitch === false) {
          loopTaco();
          tacoSwitch = true;
        }

        function loopTaco() {

          $('.taco1').hide();
          $('.taco2').css({
            display: 'block'
          });

          setTimeout(delayTaco, 200)

          function delayTaco() {
            $('.taco1').stop().show();
            $('.taco2').stop().hide();
          }
           setTimeout(loopTaco, 275)
        }//close loopTaco

      }//close else

      cashMoneyNoFactor();
      if (intervalSwitch === false) {
        // speed = 1200; //start value of speed
        loopMonster(); //makes monster start to walk
        backgroundMove(); //starts background animation
      }
      if (speed > .1) {
        update();
      }
      intervalSwitch = true;
    } //close clickOnce() function


    function moveMonster() { //hides/shows succsesive frames for MANUAL monster animation
      frames[i % frameCount].style.display = "none";
      frames[++i % frameCount].style.display = "block";
    }


    function loopMonster() { //hides/shows succsesive frames for AUTO monster animation
      frames[i % frameCount].style.display = "none";
      frames[++i % frameCount].style.display = "block";
      window.setTimeout(loopMonster, speed); //run function indefinitely and increase speed as speed variable increases
    } //close loopMonster() function


    //FIXME need to scale the BG speed better
    function backgroundMove() {
      x = parseInt(x); // get just the integer of background position starting point
      switch (true) { //increase pixel shift as speed increases
        case backgroundSpeed <= 7 && backgroundSpeed > 4:
          x -= 1.5;
          break;
        case backgroundSpeed <= 4 && backgroundSpeed > 3:
          x -= 2.0;
          break;
        case backgroundSpeed <= 3 && backgroundSpeed > 2:
          x -= 3.0;
          break;
        case backgroundSpeed <= 2:
          x -= 4.0;
          break;
        default:
          x -= 1.0;
      }

      $('.animation').css('background-position', x + 'px 0'); //insert x as pixel value to move to the left
      window.setTimeout(backgroundMove, backgroundSpeed); //rerun function indefinitely and increase speed as backgroundSpeed variable increases
    } //close backgroundMove() function


    function update() {
      backgroundSpeed = (speed / 2);
      lastSpeed = speed //remember last speed
      //FIXME maybe make a variable with a factor for the speed breaks?
      switch (true) {
        case speed <= 450 && speed > 300:
          speed -= .75;
          mph += (lastSpeed - speed) / 100;
          break;
        case speed <= 300 && speed > 200:
          speed -= .50;
          mph += (lastSpeed - speed) / 100;
          break;
        case speed <= 200 && speed > 100:
          speed -= .25;
          mph += (lastSpeed - speed) / 50;
          break;
        case speed <= 100 && speed > 50:
          speed -= .125;
          mph += (lastSpeed - speed) / 10;
          break;
        case speed <= 50 && speed > .1:
          speed -= .0625;
          mph += (lastSpeed - speed) / 3;
          break;
        default:
          speed -= 1.0;
          mph += (lastSpeed - speed) / 100;
      }
      mph = Math.round(100 * mph) / 100; //make mph round to nearest 100th for display
      document.title = ('Monster Run! ' + mph + 'mph ' + '$' + cash.toFixed(2));
      speed = speed.toPrecision(6);

      // if (speed < .1) { //make maonster run offscreen
      //   $('.running').delay(2000).animate({
      //     marginLeft: '6%'
      //   }, 300, function() {
      //     $('.running').animate({
      //       marginLeft: '100%'
      //     }, 2000)
      //   })
      //
      // }
    } //close update() function


    //FIXME make $ tied to speed-------->
    function cashMoney() { //counts cash based on clicks
      cash += .01 * factor;
      // console.log(cash);
    } //close cashMoney() function

    function cashMoneyNoFactor() { //counts cash based on pushes
      cash += .01;
    } //close cashMoneyNoFactor() function


    //boostClick---------------------------------------------->

    $('#boostClick').click(function() { //buy a click factor upgrade
      if (cash >= clickPriceValue) {
        cash = cash - clickPriceValue;
        // console.log(cash);
        factor *= 1.25;
        clickPriceValue = clickPriceValue * 1.25;
      }
    });


    //push---------------------------------------->
    $('#push').click(function() {

      if (cash >= pushPriceValue) {
        clickOnce();
        cash = cash - pushPriceValue;
        // console.log(cash);
        pushPriceValue = pushPriceValue * 1.25;
      }


      //FIXME add price
    });


    //autoPush -------------->

    var pushedOnce = false;
    var autoPushSpeed = 5000;

    function autoPushGo() {
      //FIXME set a timeout to stop when speed gets below 1
      // console.log(speed);
      clickOnce();
      window.setTimeout(autoPushGo, autoPushSpeed);
    }


    $('#autoPush').click(function() { //starts auto push to increase speed and money every 'x' seconds

      if (cash >= autoPushPriceValue) {
        if (pushedOnce === true) {
          autoPushSpeed = autoPushSpeed / 2;
        }
        if (pushedOnce === false) {
          pushedOnce = true;
          autoPushGo();
        }
        autoPushPriceValue = autoPushPriceValue * 1.25;
      }
    });


  }); //close document.ready

} //close window.onload
// });
