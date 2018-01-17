// Toggling the dropdown menu on mobile devices
$('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('.dropdown_mobile').toggleClass('show');
});

$(document).ready(function(){
  // Smooth scrolling to all links
  $(".nav_desktop a, .dropdown_mobile a, .intro_message a, .three_images a, .fashion_beauty a, footer a").on('click', function(event) {
    // Makeing sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Storing hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
  
  })

