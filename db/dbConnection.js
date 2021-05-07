const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECT,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true
    })
    .then(() => console.log("veritabanına bağlanıldı"))
    .catch(hata => console.log("db baglantı hatası" + hata));
