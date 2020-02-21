$('.menu-btn').on('click', function(){
    event.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.blocks').toggleClass('blocks_active')
    $('.logo').toggleClass('logo_active')
})

