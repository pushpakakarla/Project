import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [name,setname] = useState();
  const [email,setemail] = useState();
  const [password,setpassword]=useState();
  
  const onSubmit = async(e) =>{
    e.preventDefault();
    try{
      const sendSign = await fetch(`http://localhost:3000/user/signup`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password}),
      });

      const response =await sendSign.json();

      if(sendSign.ok){
        alert("Registration sucessful");
       
      }else{
        alert("Registration Failed");
      }
      
        }catch(error){
         console.log(error)
        }
  }


  return (
    <div >
      <div>
        <h2>SignUp</h2>
         <div>
          <input type="text" placeholder='name' name="name" onChange={(e)=> setname(e.target.value)}/>
          <br></br>
          <br></br>
          <input type="text" placeholder='email' name="email" onChange={(e)=> setemail(e.target.value)}/>
          <br></br>
          <br></br>
          <input type="password" placeholder='password'  name="password" onChange={(e)=> setpassword(e.target.value)}/>
          
          <br></br>
          <br></br>

          <button onClick={onSubmit} type="submit">Signup</button>
         </div>
         <div>
          <p>
            already a user
            <Link to="./Login">Login</Link>
          </p>

         </div>
          
      </div>
    </div>
  );
};

export default Signup;