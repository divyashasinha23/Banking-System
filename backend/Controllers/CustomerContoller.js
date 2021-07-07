const mongoose = require("mongoose");
const Customer = require("../Models/Customer");
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({id}, process.env.CUSTOMER ,{
    expiresIn: '30d'
  });
  }

module.exports.customer_signup = async(req,res) => {

    const{FullName, email, password, AccountNumber, TotalBalance} = req.body;

    try{
        const customer = await Customer.create({FullName, email, password, AccountNumber, TotalBalance});
        if(customer){
            const token = createToken(customer._id);
            res.status(201);
            res.json({
                _id: customer._id,
                FullName: customer.FullName,
                email: customer.email,
                password: customer.password,
                AccountNumber: customer.AccountNumber,
                TotalBalance: customer.TotalBalance,
                token: token,
                
            });
            
            

        }
        else{
            res.status(400);
            throw new Error ('Invalid details');   
           }
    }
    catch(err){
        console.log(err);
    }
} 

module.exports.customer_login = async(req,res) => {
    const{password, email} = req.body;

    try{
        const customer = await Customer.login(email,password);
        if(customer){
            const token = createToken(customer._id);
            res.status(200);
            res.json({
                _id: customer._id,
                email: customer.email,
                password: customer.password,
                token:token
            })
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports.user_details = async(req, res) => {

    try{
    const customer = await Customer.findById(req.customer._id);
     if(customer){
         res.status(200).json({
            _id : customer._id,
            FullName: customer.FullName, 
            AccountNumber: customer.AccountNumber,
            TotalBalance: customer.TotalBalance,
         });
     }
    }
    catch(err){
        console.log(err);
    }
}