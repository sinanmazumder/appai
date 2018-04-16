// preloader 
$(window).on('load', function() { 
  $('.preloader').fadeOut(); 
   $('.preloader').delay(1350).fadeOut('slow'); 
   $('body').delay(1350).css({'overflow':'visible'});
  })




$(document).ready(function(){
  var $owl = $('#main-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  margin:-30,
  autoplay:true,
  autoplayTimeout:5000,
  dots:false,
  mouseDrag:false,
responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
});


// nav fixed 
$("document").ready(function(){
	 $(window).scroll(function(){
	  if($(window).scrollTop()>200){
		$('.main-nav').addClass('fixed-top');  
	  }
	  else{
		$('.main-nav').removeClass('fixed-top');  
	  }
	});
	});



// parallax image
$('document').ready(function(){
$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.3) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.3) + 'px');
    }
  })
}
	});




/* nav scrolling */
$(document).ready(function() {

  // add the event listener for 'click' events
  $('.nav-link').on('click', function (e) {
    e.preventDefault(); // prevent the default action from executing
    var id = $(e.currentTarget).attr('href'); // get the destinations id
    var $dest = $(id); // convert the desination into a jQuery object

    // animate the scroll position to the destination over a period of 1000ms
    $('html,body').animate({
      scrollTop: ($dest.offset().top)
    }, 1000);
  });

});



/* video popup */
$(function(){
     $("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
        rel: 0,
        end: 120
         }
    });
});




//counter up
$("document").ready(function(){
 $('.counter').countUp({
      delay: 10,
      time: 2000
  });
});




//screenshots carousel
$(document).ready(function(){
  var $owl = $('#screen-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  margin:-30,
  autoplay:true,
  autoplayTimeout:5000,
  dots:true,
  mouseDrag:false,
  responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
});



//testimonial carousel
$('document').ready(function(){
   $('#testimonial').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    items:1,
    lazyLoad: false,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})
})




//faqs accordion
  $('document').ready(function(){
    $("#accordion").accordion({
    classes: {
      "ui-accordion-header": "ui-accordion-custom-header",
      "ui-accordion-header-active": "ui-accordion-custom-header-active",
      "ui-accordion-header-collapsed": "ui-accordion-custom-header-collapsed",
      "ui-accordion-content": "ui-accordion-custom-content",
      "ui-accordion-header-icon": "ui-accordion-custom-header-icon"
    },
       animate: 200,
       active: false,
       collapsible: true,
       heightStyle: "content",
       icons: { header: "fas fa-plus-circle", activeHeader: "fas fa-minus-circle" }
  });  
  });

//map

     function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    maxZoom:16,
    minZoom:17,
    draggable:false,
    center: {lat: 23.8671078, lng: 90.3850752},
    left: {lat: 23.8666857, lng: 90.3849623},
    styles: [
            {elementType: 'geometry', stylers: [{color: '#F7F7F7'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#000'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#F35379'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#FFFFFF'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#EDEDED'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#E5E5E5'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#E5E5E5'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#E5E5E5'}]
            }
          ]

  });

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'https://png.icons8.com/dusk/64/000000/region-code.png',
    draggable: false,
    map: map
  });

}






