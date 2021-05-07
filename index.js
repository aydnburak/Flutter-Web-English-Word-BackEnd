const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./db/dbConnection');


//ROUTESesc
const userRouter = require('./router/userRouter');
const wordRouter = require('./router/wordRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/word', wordRouter);

app.get('/', (req, res) => {
    res.status(200).json({'mesaj':'hoşgeldiniz'}); 
});


app.listen(process.env.PORT, () => {
    console.log("3000 portundan server ayaklandırıldı"); 
});