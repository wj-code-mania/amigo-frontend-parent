jQuery(document).ready(function(){

  //============================== MENU SCROLL =========================
   $(window).load(function(){
    $('.body-wrapper').each(function(){
      var header_area = $('.header-wrapper');
      var main_area = header_area.children('.navbar');

      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function(){
        
        if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() == 0 || $(this).width() < 750)){
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          navigation.animate({'margin-top': original.nav_top}, {duration: 300, queue: false, complete: function(){
            header_area.css('height', 'auto');
          }});
        }else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 && header_area != undefined &&  header_area.offset() != undefined &&
          $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top')) ){

          header_area.css('height', header_area.height());
          main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
          main_area.appendTo($('body')).animate({'opacity': 1});

          navigation.css({'margin-top': '0px'});
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

//============================== SELECT BOX =========================
  $('.select-drop').selectbox();

//============================== MENU DROPDOWN ON HOVER =========================
  var header_area = $('.header-wrapper');
  if (header_area.width() > 750) {
    $('.nav .dropdown').hover(function() {
      $(this).addClass('open');
    },
    function() {
      $(this).removeClass('open');
    }
    );
  }

//============================== CART =========================
$('.cart-dropdown a').on("click",function() {
    $(".dropdown-menu").toggleClass('display-block');
    $(".cart-dropdown a i").toggleClass('fa-close').toggleClass("fa-shopping-basket");
    $(".badge").toggleClass('display-none');
});

//============================== Rs-Slider =========================
  jQuery('.bannercontainerV1 .fullscreenbanner').revolution({
   delay: 5000,
   startwidth: 1170,
   startheight: 560,
   fullWidth: "on",
   fullScreen: "off",
   hideCaptionAtLimit: "",
   dottedOverlay: "twoxtwo",
   navigationStyle: "preview4",
   fullScreenOffsetContainer: "",
   hideTimerBar:"on",

  });

  jQuery('.bannercontainerV3 .fullscreenbanner').revolution({
    delay: 5000,
    startwidth: 1170,
    startheight: 500,
    fullWidth: "on",
    fullScreen: "on",
    hideCaptionAtLimit: "",
     dottedOverlay: "twoxtwo",
    navigationStyle: "preview4",
    fullScreenOffsetContainer: "",
    hideTimerBar:"on",
  });

  jQuery('.bannercontainerV2 .fullscreenbanner').revolution({
   delay: 5000,
   startwidth: 1170,
   startheight: 660,
   fullWidth: "on",
   fullScreen: "off",
   hideCaptionAtLimit: "",
   dottedOverlay: "none",
   navigationStyle: "preview4",
   fullScreenOffsetContainer: "",
   hideTimerBar:"on"
  });
//============================== OWL-CAROUSEL =========================
  var owl = $('.owl-carousel.teamSlider');
  owl.owlCarousel({
    loop:true,
    margin:28,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    moveSlides: 4,
    dots: false,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:3
      },
      992:{
        items:4
      }
    }
  });

  var owl = $('.owl-carousel.commentSlider');
  owl.owlCarousel({
    loop:true,
    margin:28,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    moveSlides: 1,
    dots: false,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:1
      },
      992:{
        items:1
      }
    }
  });

  var owl = $('.owl-carousel.partnersLogoSlider');
    owl.owlCarousel({
      loop:true,
      margin:28,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      nav:true,
      dots: false,
      responsive:{
        320:{
          slideBy: 1,
          items:1
        },
        768:{
          slideBy: 1,
          items:3
        },
        992:{
          slideBy: 1,
          items:5
        }
      }
    });
    var owl = $('.owl-carousel.categorySlider');
      owl.owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        nav:true,
        dots: false,
        items: 1,
      });
//============================== COUNTER-UP =========================
  $(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  });

  //============================== BACK TO TOP =========================
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('#backToTop').css("opacity", 1);
        } else {
          $('#backToTop').css("opacity", 0);
        }
      });
    });

  //============================== SMOOTH SCROLLING TO SECTION =========================
  $(document).ready(function () {
    $('.scrolling  a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var target = $(this).attr('href');
      $(target).velocity('scroll', {
        duration: 800,
        offset: -150,
        easing: 'easeOutExpo',
        mobileHA: false
      });
    });
  });

//============================== PRICE SLIDER RANGER =========================
var minimum = 20;
var maximum = 300;

$( "#price-range" ).slider({
  range: true,
  min: minimum,
  max: maximum,
  values: [ minimum, maximum ],
  slide: function( event, ui ) {
    $( "#price-amount-1" ).val( "$" + ui.values[ 0 ] );
    $( "#price-amount-2" ).val( "$" + ui.values[ 1 ] );
  }
});

$( "#price-amount-1" ).val( "$" + $( "#price-range" ).slider( "values", 0 ));
$( "#price-amount-2" ).val( "$" + $( "#price-range" ).slider( "values", 1 ));

//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================

    var allIcons = $("#faqAccordion .panel-heading i.fa");
    $('#faqAccordion .panel-heading').click(function(){
      allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsOne = $("#accordionOne .panel-heading i.fa");
    $('#accordionOne .panel-heading').click(function(){
      allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
    $('#accordionTwo .panel-heading').click(function(){
      allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsThree = $("#togglesOne .panel-heading i.fa");
    $('#togglesOne .panel-heading').click(function(){
      allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
    $('#togglesTwo .panel-heading').click(function(){
      allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

  //============================== Product Gallery =========================
  var galleryThumb = $('.product-gallery-thumblist a'),
      galleryPreview = $('.product-gallery-preview > li');


  galleryThumb.on('click', function(e) {
    var target = $(this).attr('href');

    galleryThumb.parent().removeClass('active');
    $(this).parent().addClass('active');
    galleryPreview.removeClass('current');
    $(target).addClass('current');

    e.preventDefault();
  });

  // Count Input (Quantity)
  //------------------------------------------------------------------------------
  $(".incr-btn").on("click", function(e) {
    var $button = $(this);
    var oldValue = $button.parent().find('.quantity').val();
    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
    if ($button.data('action') == "increase") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below 1
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
        $button.addClass('inactive');
      }
    }
    $button.parent().find('.quantity').val(newVal);
    e.preventDefault();
  });

  $("[data-toggle=tooltip]").tooltip();
});
