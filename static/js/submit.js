// script for submission submission
$(document).on('submit', '#submit', function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/submit',
        data: {
            poem: $("textarea[name='poem']").val(),
            author: $("input[name='author']").val()
        },
        success: function () {
        }
    })
    $('#submissions-div').load(location.href + ' #submissions-div');
})