$( document ).ready(function() {
    $('.fa-search').click(function(){
      $('.navbar').toggleClass('hidden');
      $('.searchInput').toggleClass('shown');
      $('.link').removeClass('shown-side');
      $('.navbarContainer').removeClass('full-width-nav')
    })

    $('.searchInput').focus(function(){
      $(this).addClass('wider');
    })
    $('.searchInput').focusout(function(){
      $(this).removeClass('wider');
    })


    $('.fa-bars').on('click', function(){
        $('.navbarContainer').toggleClass('full-width-nav')
        $('.link').toggleClass('shown-side');
        $('.searchInput').removeClass('shown');


    })

    //for scrolling animation
    //Scroll animation down the page
    $(".account").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      console.log(section);
      if(section == "#ffal"){
        console.log('one');
        $("html, body").animate({
          scrollTop: $(section).offset().top+15
      });
      }else{
        console.log('two');
        $("html, body").animate({
            scrollTop: $(section).offset().top-50
        });
      }
  });


});
