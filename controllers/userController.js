const User = require('../models/userModel');

const tumUserlariListele = async (req, res)=>{
    const tumUserlar = await User.find({});
    res.status(200).json(tumUserlar);
};
const login =async(req,res)=>{
    
    try {
        const user = await User.findOne({userName:req.body.userName})
        if(!user){
            res.status(202).json({'mesaj':'Kullanıcı Kayıtlı Değil'});
        }else{
            if(user.sifre==req.body.sifre){
                res.status(200).json(user);
            }else{
                res.status(202).json({'mesaj':'Şifre Yanlış'});
            }
        }
        
    } catch (error) {
        res.status(202).json({'mesaj':'Bir Sorun oluştu Tekrar Deneyiniz.'});
    }
};
const register=async(req,res)=>{
    
    try {
        const user = await User.findOne({userName:req.body.userName})
        if(!user){
            const eklenecekUser = new User(req.body);
        const sonuc = await eklenecekUser.save();
        res.status(200).json(sonuc);
        }else{
            res.status(202).json({'mesaj':'UserName Kullanımda'});
        }
    } catch (error) {
        res.status(202).json({'mesaj':'Kayıt olunamadı'});
    }
};


module.exports = {
    tumUserlariListele,
    login,
    register
}