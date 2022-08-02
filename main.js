var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

 new Swiper(".mySwiper1", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
 new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
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
//////////////////////////////////////////////////


$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function() {

  $(".tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {
  
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel"); 
  $("#"+d_activeTab).fadeIn();

$(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

$("ul.tabs li").removeClass("active");
$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});


/* Extra class "tab_last" 
 to add border to right side
 of last tab */
$('ul.tabs li').last().addClass("tab_last");


////////////////////////////////////////////////////

//slider2

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
});

$("a[data-slide]").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".slider-nav").slick("slickGoTo", slideno - 1);
});



////////////////////////////////////

const $drowdownArrow = document.querySelector('.fa-angle-down');
const $checkbox = document.getElementById('openDropdown');
const $dropdownMenu = document.querySelector('.dropdown-menu');

$checkbox.addEventListener('change', () => {
  $drowdownArrow.classList.toggle('rotate-dropdown-arrow');
});

$dropdownMenu.addEventListener('click', (e) => {
  $checkbox.checked = false;
  // setting checked to false won't trigger 'change'
  // event, manually dispatch an event to rotate
  // dropdown arrow icon
  $checkbox.dispatchEvent(new Event('change'));
});
