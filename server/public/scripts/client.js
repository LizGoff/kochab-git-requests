console.log('client side up');

$(document).ready(onReady);
console.log('JS');

function onReady() {
    console.log('jquery loaded');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            console.log(response);
        });

    $('#newQuoteButton').on('click', changeQuote);
    listQuotes();

}

function changeQuote() {
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
        .then(function (response) {
            console.log(response);
            $('#displayQuote').text(`${response.quote} - ${response.author}`);
        });

}

function listQuotes() {
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            console.log(response);
            response.forEach(object){
                $('#listOfQuotes').append(`<p>${object.quote} - ${object.author}</p>`);
            };
        });
}

// "listOfQuotes"

// module.exports = client;