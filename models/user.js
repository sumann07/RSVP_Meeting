const {Schema, model} =require("mongoose");

const userSchema = new Schema(
    {
          Name:{
              type:String,
              required:true
          },
          Age:{
            type:Number,
            required:true
        },
        DOB:{
            type:String,
            required:true
        },
        Profession:{
            type:String,
            required:true
        },
        Locality:{
              type:String,
              required:true,
             
          },
          
        
    No_of_guest:{
            type:Number,
            required:true
        },
    Address:{
            type:String,
            required:true,
            max: 50
        }

    }
);
module.exports = model("user" , userSchema)