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


  

})



