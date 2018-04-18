console.log('client side up');

$(document).ready(onReady);
console.log('JS');

function onReady() {
    console.log('jquery loaded');
    $.ajax({
        type: 'GET', 
        url: '/all-quotes'
    })
    .then(function(response){
        console.log(response);
    });
}


// module.exports = client;