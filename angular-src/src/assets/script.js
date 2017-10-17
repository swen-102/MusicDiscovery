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


});
