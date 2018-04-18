const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//or you can use const PORT = 5000;
app.listen(port, function() {
    console.log(`Running on port: ${PORT}`);
});

app.get('/allquotes', function(req, res){
    let responseString = 'All Quotes';

    res.send(quotes_data);
});


const quotes_data = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
]; 

//const text = 'All quotes: ';
//return (text + quotes_data);

console.log(quotes_data);