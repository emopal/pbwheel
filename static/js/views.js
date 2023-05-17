// allows me to contain multiple pages within one page
$(function(){
    $('.state-button').on('click', function(){
        var $target = $(this).attr('data-target');
        var $targetSelector = 'section#' + $target;
        $($targetSelector).removeClass('state-hidden');
        $($targetSelector).addClass('state-visible');
        $('section.state:not(' + $targetSelector + ')').removeClass('state-visible');
        $('section.state:not(' + $targetSelector + ')').addClass('state-hidden');
    })
}); 