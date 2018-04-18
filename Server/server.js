const express = require('express');
const app = express();
const PORT = 5000;

// tie to files 

const quotes_data = require('./modules/quotes-data');

app.use(express.static('server/public'));

app.get('/quote', (req, res) => {
   const randomNumber =  Math.floor(Math.random() * quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

// app.get('/', (req, res) => {
//     // console.log('yep it worked!');
//     res.send('happy wednesday');
// });

// anonymous call back function
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});
