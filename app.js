import express from 'express';

import {connectToDB} from './app/database';

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    connectToDB()
        .then(() => {
            res.send('Checking database connection');
        })
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 3000!')
});