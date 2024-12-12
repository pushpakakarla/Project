const Signup = require ("../model/Signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Secrete = "pushpa"
const Signups = async(req,res)=>{
  const{name,email,password}=req.body;

  try{
    const sign=await Signup.findOne({email:email});
    const hashpassword = await bcrypt.hash(password,10);
    if(sign){
      res.status(400).json({message:"user already exist"});
    }
    else{
      const user= await Signup.create({
        name,
        email,
        password: hashpassword,
      });
      if(user){
        res.status(200).json({message:"user registration sucess"});
        console.log("registration sucess");
        
      }
      else{
        res.status(400).json({message:"error while registration"});
      }
    }
  } catch (error){
    console.log(error)
  }

};

const Login = async (req,res) => {
  const { email , password } =req.body;
  try{
    const log = await Signup.findOne({email:email});

    if(!log || !(await bcrypt.compare(password,log.password))){
      res.status(400).json({message: "inavlid email or password"});
      console.log("invalid");
    }else{
      const token = await jwt.sign ({userId:Login._id},Secrete,{expiresIn:"30h"});
      res.status(200).json({message:"User login succesfully",token})
            console.log("user login sucessfully")
    }
  }catch(error){
    console.log(error);
  }
};

module.exports={Signups,Login}