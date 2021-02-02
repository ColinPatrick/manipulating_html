$(document).ready(function () {

    let count = 0

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

        $('#friendList').append('<li>' + friendNames[count] + '</li>');
        count++;
        if (count == friendNames.length) {
            $('#friendBtn').attr('disabled', true);
        } else {
            $('#friendBtn').attr('disabled', false);
        };
    });

});