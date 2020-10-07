const user = require("../models/user");
const { param } = require("../routes/routes");


exports.addUser=(req,res)=>{
    const {Name,Age,DOB,Profession,Locality,No_of_guest,Address}=req.body;
    if(Name==='' || Age==='' || DOB==+'' || Profession==='' || Locality==='' || No_of_guest===''|| Address===''){
        return res.status(400).json({
            error:'please provide details'
        });
    }
    const add=new user({
        Name:Name,
        Age:Age,
        DOB:DOB,
        Profession:Profession,
        Locality:Locality,
        No_of_guest:No_of_guest,
        Address:Address
    })
    add.save((err,additem)=>{
        if(err){
            return res.status(400).json({
                error:'something went wrong'
            })
        }
        res.json({
            message:'Item save succesfully'
        })
    })
 }

 exports.searchUser=(req,res)=>{
     const {Name} = req.body;
     user.find({
         $or:[
             {'Name':Name},
             {'Locality':Name}
         ]
     }).exec((err,result)=>{
         if(err){
             return res.status(400).json({
                 error:'went wrong'
             })
         }
         res.json({
             message:result
         })
     })
 }
 exports.report=(req,res)=>{
     const ageBetween1318=user.find({"Age":{$gte:13 , $lt:18}}).count().exec((err,result)=>{
         res.json({
             message:"13-18 : " + result
         })
     })
    
 }
 exports.report2=(req,res)=>{
    const ageBetween1825=user.find({"Age":{$gte:18 , $lt:25}}).count().exec((err,result)=>{
        res.json({
            message:"18-25 : " + result
        })
    })
   
}
exports.report3=(req,res)=>{
    const ageBetween25=user.find({"Age":{$gte:25 }}).count().exec((err,result)=>{
        res.json({
            message:"25 + : " + result
        })
    })
   
}
exports.locality=(req,res)=>{

   user.find( {
      },{_id:1,Locality:1}
      ).exec((err,result)=>{
       res.json({
           message:result
       })
   })
}


exports.professionCount=(req,res)=>{

    user.find({
       Profession:"Student"
    }).count().exec((err,result)=>{
        if(err){
            return res.status(400).json({
                error:'went wrong'
            })
        }
        res.json({
            message:result
        })
    })
}
exports.professionCounts=(req,res)=>{
    
    user.find({
       Profession:"Employed"
    }).count().exec((err,result)=>{
        if(err){
            return res.status(400).json({
                error:'went wrong'
            })
        }
        res.json({
            message:result
        })
    })
}

exports.averageGuest=(req,res)=>{
   const count= user.find({}).count().exec((err,result)=>{
    user.aggregate([{
        $group:{
            _id:null,
            sum:{$sum:"$No_of_guest"}
        }
    }]).exec((err,result1)=>{
        res.json({
            message:result1,
            msg:result
        })
    })
     
   })
   
};
exports.details=(req,res)=>{
    const _id=req.params._id;
    user.find({_id:_id}).exec((err,result)=>{
        if(err){
            return res.status(400).json({
                error:`Something went wrong`
            })
        }
        res.json({
            message:result
        })
    })
}
