const express = require('express');
const app = express();
const PORT = 5000;

// tie to file 
const quotes_data = require('./modules/quotes-data');



// const quotes_data = [
//     { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
//     { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
//     { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
// ]; 

app.get('/quote', (req, res) => {
   const randomNumber =  Math.floor(Math.random() * quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.get('/all-quotes', (req, res) => {
    // console.log('yep it worked!');
    res.send(quotes_data);
});

// anonymous call back function
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});

// console.log(quotes_data);

// module.exports = number;