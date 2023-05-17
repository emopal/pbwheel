// script for submission submission
$(document).on('submit', '#submit', function(e){
    e.preventDefault;
    $.ajax({
        type: 'POST',
        url: '/submit',
        data: {
            poem: $('#submit > input#home').val(),
            author: $('submit > input#author').val()
        },
        success: function(){
            $('#submissions').reload(window.href + '#submissions');
        }
    })
})