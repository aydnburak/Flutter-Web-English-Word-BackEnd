const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({

    userID: {
        type: String,
        required: [true, "username boş olamaz"],
        trim: true
    },
    tr: {
        type: String,
        required: [true, "username boş olamaz"],
        trim: true
    },
    en: {
        type: String,
        required: [true, "username boş olamaz"],
        trim: true
    }
}, { collection: 'kelimeler', timestamps: true });



const Word = mongoose.model('Word', WordSchema);

module.exports = Word;