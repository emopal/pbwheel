function randomizeWords() {
    // Get random words
    $.getJSON('./static/js/words.json', function (data) {
        var wordOne = data[Math.floor(Math.random() * data.length)];
        var wordTwo = data[Math.floor(Math.random() * data.length)];
        var wordThree = data[Math.floor(Math.random() * data.length)];
        var wordFour = data[Math.floor(Math.random() * data.length)];
        var wordFive = data[Math.floor(Math.random() * data.length)];
        var wordSix = data[Math.floor(Math.random() * data.length)];
        var wordSeven = data[Math.floor(Math.random() * data.length)];
        var wordEight = data[Math.floor(Math.random() * data.length)];

        $('.container .one').html("<p>" + wordOne + "</p>");
        $('.container .two').html("<p>" + wordTwo + "</p>");
        $('.container .three').html("<p>" + wordThree + "</p>");
        $('.container .four').html("<p>" + wordFour + "</p>");
        $('.container .five').html("<p>" + wordFive + "</p>");
        $('.container .six').html("<p>" + wordSix + "</p>");
        $('.container .seven').html("<p>" + wordSeven + "</p>");
        $('.container .eight').html("<p>" + wordEight + "</p>");
    });
};

$('.container').on('load', randomizeWords());
$('#randomize-btn').on('click', randomizeWords());