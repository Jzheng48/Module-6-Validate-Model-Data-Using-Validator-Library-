const Loan = require('../models/loanSchema')


exports.getData= async (req, res) => 
   {
    const loans = await Loan.find()
    res.status(200).json({
        status:'success',
        results: loans.length,
        data: {
            loans
        }
    })
   }

exports.getDataById= async (req, res) => 
   {
    const {id} = req.params
    const loans = await Loan.find({id:id})
    res.status(200).json({
        status:'success',
        results: loans.length,
        data: {
            loans
        }
    })
   }

   exports.postData = async (req, res) => {
    try {
      // Create a new loan object with the request body
      const newLoan = new Loan(req.body);
  
      // Validate the new loan object against the loan schema
      await newLoan.validate();
  
      // Save the new loan object to the database
      const loan = await Loan.create(newLoan);
  
      console.log(loan);
  
      res.status(201).json({
        status: 'success',
        data: loan,
      });
    } catch (err) {
      // Return a 400 Bad Request error with the validation error message
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  


exports.patchDataById =async (req, res) => 
{
 const {id} = req.params
 const newLoan=req.body;
 const loans = await Loan.findOneAndUpdate({id}, newLoan, {
    new: true
  })
 res.status(200).json({
     status:'success',
     results: loans.length,
     data: {
         loans
     }
 })
}

exports.deleteDataById = async (req, res) => 
{
 const {id} = req.params
 const loans = await Loan.deleteOne({id})
 res.status(200).json({
     status:'success',
     results: loans.length,
     data: {
         loans
     }
 })
}