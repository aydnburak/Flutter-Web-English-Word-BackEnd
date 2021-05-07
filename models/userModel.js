const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true,"username boş olamaz"],
        unique: true,
        trim: true,
        lowercase:true,
        minlength: [5,"username en az 3 karakter olmalı ...."],
        maxlength:50
    },
    sifre: {
        type: String,
        required: true,
        minlength:5,
        trim:true
    },
}, { collection: 'kullanicilar', timestamps:true });



const User = mongoose.model('User', UserSchema);

module.exports=User;