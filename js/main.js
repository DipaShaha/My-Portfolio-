jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
  function fullscreen(){
    jQuery('#intro').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
  }
  
  fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });
 
      // smooth scrolling
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
        });
        //end smooth scrollling


        //nav link active change
        var sections = $('section')
          , nav = $('nav')
          , nav_height = nav.outerHeight();

        $(window).on('scroll', function () {


          //nav colore change
           var scroll = $(window).scrollTop();
          

            if (scroll >650) {
              $('nav').removeClass('navbar-custom ');
              $('#hire').removeClass('hire_me');
            }

            else{
              $('nav').addClass('navbar-custom ');
              $('#hire').addClass('hire_me');
            }


          //end nav clor change



          var cur_pos = $(this).scrollTop();
          
          sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            
            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              sections.removeClass('active');
              
              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
        });

        //end link color change





});
   