const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Admin = require('../Models/Admin');
const Customer = require('../Models/Customer');

const createToken = (id) => {
    return jwt.sign({id}, "adminsecretkey" ,{
    expiresIn: '30d'
  });
  }

module.exports.admin_signup = async(req, res) => {

    const{Username, password} = req.body;
    try{
       const admin = await Admin.create({Username, password});
       
       if(admin){
        const token = createToken(admin._id);
           res.status(201).json({
               _id: admin._id,
               Username : admin.Username,
               password : admin.password,
               token : token
           })
       }
    }
    catch(err){
        console.log(err);
    }
}

module.exports.admin_login = async(req,res) => {
    const{Username, password} = req.body;

    try{
        const admin = await Admin.login(Username,password);
        if(admin){
            const token = createToken(admin._id);
            res.status(200);
            res.json({
                _id: admin._id,
                email: admin.email,
                password: admin.password,
                token:token
            })
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports.all_user = async(req,res) => {
    try{
    const users = await Customer.find();
    if(users.length !== 0){
      res.status(200).json({
       users,
      });
    }
    else{
      res.status(200).json({
        msg: "No User Exist"
      });
    }
  }
  catch(err){
    console.log(err);
    res.status(400).json({
      msg: 'Server Error'
    });
  }
  }

module.exports.bank_details = async(req,res) => {
 
  try{
    let totalSum = 0;
    const users = await Customer.find();
    for(let index =0 ; index< users.length; index++){
      totalSum = totalSum + users[index].TotalBalance
    }
     TotalCustomer = users.length;
     TotalAmount = totalSum;

    //  Admin.create({T})

    // console.log(totalSum);
    if(users.length != 0){
      res.status(201).json({
        TotalCustomer: users.length,
        TotalAmount: totalSum
      });
    }
  }
  catch(err){
    console.log(err);
  }

}