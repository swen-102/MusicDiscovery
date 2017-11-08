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

    //Scroll animation down the page
    $(".account").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top-50
      });
  });

  //on scroll
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    
    
  });

  //add stuff to album on hover
  $('body').find('.albumOptions').hide();
  
  $('.album').hover(function(){
    $(this).find('.options').append('<i class="fa fa-list albumOptions fa-5x"></i>');
  },function(){
    $(this).find('.options').html('');

  });
});
