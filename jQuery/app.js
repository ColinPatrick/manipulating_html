$(document).ready(function () {

    $('body').prepend('<button class="firstBtn" type="button">Click Me</button>');

    $('.firstBtn').click(function () {
        alert('Hello, friend.');
    });

    $('#submitBtn').click(function () {
        alert($('input[type="text"]').val());
    });

    $('#colorDiv').mouseover(function () {
        $('#colorDiv').css('background-color', 'red');
    });

    $('#colorDiv').mouseout(function () {
        $('#colorDiv').css('background-color', 'black');
    });

    $('#paragraph').click(function () {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
    
            $(paragraph).css('color', `rgb(${r}, ${g}, ${b})`);
    });

    $('#nameBtn').click(function () {
        $('#nameDiv').append('<span>COLIN!</span>');
    });

    $('#friendBtn').click(function () {
        let friendNames = ['Holden', 'Naomi', 'Amos', 'Alex', 'Bobbie', 'Chrisjen', 'Drummer', 'Peaches', 'Miller', 'Cotyar'];

        for (i = 0; i < friendNames.length; i++) {
            $(friendList).append('<li>' + friendNames[i] + '</li>')
        };
    });

});