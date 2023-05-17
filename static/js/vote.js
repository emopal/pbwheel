// script for submission voting
$(document).on('click', 'button.vote', function(e){
    e.preventDefault;
    var type = e.attr('data-type');
    var id = e.attr('data-id');
    $.ajax({
        type: 'POST',
        url: '/vote/' + id + '/' + type,
        success: function(){
            e.disabled = true;
            $('#submissions').reload(window.href + '#submissions');
        }
    })
});