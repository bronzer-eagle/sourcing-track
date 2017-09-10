import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World, we are deploying with github!');
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 3000!')
});