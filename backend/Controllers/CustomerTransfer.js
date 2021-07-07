const mongoose = require('mongoose');
const Customer = require('../Models/Customer');
const Transfer = require('../Models/CustomerTransaction');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports.transfer_amount = async(req,res) => {
   
     var{AmountDebit, ReceiverAccountNumber, CustomerAcc} = req.body;
     var remaining;
     var increase;
     var SenderAccountNumber
     var AccountNumber
     var AmountCredit;

     try{
        const sendercustomer = await Customer.findById(req.customer._id);
        SenderAccountNumber = sendercustomer.AccountNumber;
        if(sendercustomer){
         const customerTrans = await Transfer.create({AmountDebit, ReceiverAccountNumber, CustomerAcc, SenderAccountNumber});
         AccountNumber = ReceiverAccountNumber;
         const receivercustomer = await Customer.findOne({AccountNumber});
         if(customerTrans){
                 res.status(201);
                 res.json({
                     msg: "Successful transaction",
                     AmountDebit: customerTrans.AmountDebit,
                     ReceiverAccountNumber: customerTrans.ReceiverAccountNumber,   
                     SenderAccountNumber,
                     
                 });
                 
                 remaining = sendercustomer.TotalBalance - AmountDebit;
                
                 await Customer.findOneAndUpdate({_id: req.customer},{
                     TotalBalance : remaining
                  });    
                  
                 increase = receivercustomer.TotalBalance + AmountDebit;

                 await Customer.findOneAndUpdate({AccountNumber}, {
                    TotalBalance : increase
                });
                 
                
                 AmountCredit = AmountDebit;
                 CustomerAcc = receivercustomer._id

                 await Transfer.create({AmountCredit, ReceiverAccountNumber, SenderAccountNumber, CustomerAcc});
                         
         }
        }
        else{
            console.log("user not found");
        }
     }
     catch(err){
         console.log(err);
     }

}

module.exports.get_details = async(req,res) => {

    try{
        
            const Detail = await Transfer.find({CustomerAcc: req.customer._id});
            if(Detail){
                res.status(200);
                res.json({
                   Detail
                })
            }
        
        else{
            console.log("Not Found");
        }
        
    }
    catch(err){
        console.log(err);
    }
    
}