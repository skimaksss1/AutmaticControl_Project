$(window).on('load', function() {
    $preloader = $('.preloader'),
        $loader = $preloader.find('.preload');
    $loader.fadeOut();
    $preloader.delay(1200).fadeOut('slow');
});