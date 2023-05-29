// script for submission voting
$('.vote').on('click', function(e){
    e.preventDefault();
    var type = $(this).attr('data-type');
    var id = $(this).attr('data-id');
    console.log('Clicked to vote. id:' + id + 'type:' + type);
    $.ajax({
        type: 'POST',
        url: '/vote/' + id + '/' + type
    })
    $('#submissions-div').load(location.href + ' #submissions-div');  
});