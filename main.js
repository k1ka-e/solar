var swiper = new Swiper(".mySwiper", {
   pagination: {
     el: ".swiper-pagination",
   },
 });



 $(function () {
  /* menu nav bar */
  $("#nav__toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".mobile_menu").toggleClass("active");
    // $("#mobile").toggleClass("active");
    // $(".overlay").addClass("active");
    // $("body").css("overflow", "hidden");
  });


  

});

// Accordion

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks, tablinks__radius1, tablinks__sircle;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


(function($, document) {
    
  // get tallest tab__content element
  let height = -1;

$('.tab__content').each(function() {
  height = height > $(this).outerHeight() ? height : $(this).outerHeight();
     $(this).css('position', 'absolute');
});
  
  // set height of tabs + top offset
$('[data-tabs]').css('min-height', height + 40 + 'px');

}(jQuery, document));


////////////////////////////////////////////////////

//slider2

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});