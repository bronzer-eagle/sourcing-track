import dotenv from 'dotenv';
import express from 'express';
import DbController from './app/database';

if (process.env.NODE_ENV !== 'production') {
    console.log('NODE_ENV', process.env.NODE_ENV);
    console.log('Loading .env file');

    dotenv.load();
} else {
    console.log('NODE_ENV', process.env.NODE_ENV);
}

const app = express();
const dbCtrl = new DbController();

app.use(express.static('public'));

app.get('/', function (req, res) {

    dbCtrl.init()
        .then(() => {
            res.send('Database connected');
        })
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 3000!')
});