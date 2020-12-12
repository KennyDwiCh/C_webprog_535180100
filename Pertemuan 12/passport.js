const passports = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const model = require("../models/User");
module.exports = function(passport){
    passport.use(
        new passports({usernameField:"email"},(email,password,done)=>{
            model.findOne({email:email})
            .then((user)=>{
                if(!user){
                    return done(null,false,{message:"Email Tak Terdaftar"});
                }
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(err) throw err;
                    if(isMatch){
                        return done(null,user);
                    }else{
                        return done(null,false,{message:"Password Salah"});
                    }
                });
            }).catch((err)=> console.log(err));
        })
    )};
    