import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css';
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const [email,setemail] = useState();
  const [password,setpassword]=useState();

  const navigate = useNavigate('/Home');
  
  const onSubmit = async(e) =>{
    e.preventDefault();
    try{
      const sendSign = await fetch(`http://localhost:3000/user/login`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({email,password}),
      });

      const response =await sendSign.json();

      if(sendSign.ok){
        alert("login sucessfully");
        localStorage.setItem("token",response.token);
        navigate('/HomePage')
       
      }else{
        alert("user doesnot exit");
      }
      
        }catch(error){
         console.log(error)
        }
  }

  return (
    <div className={style.add}>
    <div className={style.add1}>
      <div>
        <h1>LOGIN</h1>  
      </div>
      <br />
        <div>
            <input className={style.input} type="email" name="email" placeholder="Email" onChange={(e)=> setemail(e.target.value)} />
            <br></br>
            
            <br></br>
            <input className={style.input} type="password" name="password" placeholder="Password" onChange={(e)=> setpassword(e.target.value)} />
            <br/>
            <br/>

            <button  onClick={onSubmit} >submit</button>
       </div> 
        <br />
        <br />
       <div>
        <p>
          Don't have an account? 
          <Link to="./Signup">Signup</Link>
          </p>
       </div>
   
      </div> 
    </div>
  );
};

export default Login;