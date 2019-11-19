$(function () {

    "use strict";

    var wind = $(window);

    // scrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -60 // offste (in px) for fixed top navigation
    });



});

jQuery(document).ready(function ($) {
    
    new WOW().init();
    
    
    
    
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    //For Pricing Table
     $(window).scroll(function(){
        let position=$(this).scrollTop();
         console.log(position);
        if(position>=6000){
            $('.pricing-card-1').addClass("move-from-left");
            $('.pricing-card-2').addClass("move-from-bottom");
            $('.pricing-card-3').addClass("move-from-right");
        }else{
            $('.pricing-card-1').removeClass("move-from-left");
            $('.pricing-card-2').removeClass("move-from-bottom");
            $('.pricing-card-3').removeClass("move-from-right");
        }
    });


    //Way point & Skill progres bar


    $('.info-section').waypoint(function (direction) {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);
        });
        $(this).destroy();
    },{
        offset:'25%'
    });

    //Gallery Portfolio
    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });
    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });


    /* ===============================
          Portfolio Image Gallery
     ===============================*/
    // magnificPopup
    $('.portfolio-section .link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
      

  
    //Scroll IT
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1500, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -60 // offste (in px) for fixed top navigation
    });

});

 //counter up
        var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-section').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

$(window).on("load", function () {

    // Preloader
    $(".loading").addClass("loading-end").fadeOut(1000);

    // close navbar-collapse when a  clicked
    $(".nav a").on('click', function () {
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });


    // navbar scrolling background
    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default"),
            h_hight = $(".header").outerHeight();

        if (bodyScroll > h_hight) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });



});
