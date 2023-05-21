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

        $('.container .one').text(wordOne);
        $('.container .two').text(wordTwo);
        $('.container .three').text(wordThree);
        $('.container .four').text(wordFour);
        $('.container .five').text(wordFive);
        $('.container .six').text(wordSix);
        $('.container .seven').text(wordSeven);
        $('.container .eight').text(wordEight);
    });
};

$('.container').on('load', randomizeWords());
$('#randomize-btn').on('click', randomizeWords());