const Word = require('../models/wordModel');

const allUserWords = async (req, res) => {

    try {
        const tumkelimeler = await Word.find({ userID: req.params.userID });
        res.status(200).json(tumkelimeler);
    } catch (error) {
        res.status(202).json({'mesaj':'hata oluştu'});
    }

};

const addWord = async (req, res) => {
    try {
        const eklenecekKelime = new Word(req.body);
        const sonuc = await eklenecekKelime.save();
        res.status(200).json(sonuc);
    } catch (error) {
        res.status(202).json({ 'mesaj': 'kelime eklerken hata' });
    }
};


module.exports = {
    allUserWords,
    addWord
}