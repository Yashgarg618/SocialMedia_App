import React,{useEffect,useState} from 'react'
import logo from "../img/logo.png";
import './Signup.css';
import { Link ,useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';

export default function Signup() {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
// Toast function
const notifyA=(msg)=> toast.error(msg)
const notifyB=(msg)=> toast.success(msg)
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const postData=()=>{
    // checking email
    if(!emailRegex.test(email)){
        notifyA("Inavlid email")
        return
    }else if(!passRegex.test(password)){
        notifyA("Password must contain atleat 8 characters, including atleast 1 number and 1 includes both lower and uppercase letter and special character for example #,?,!")
        return
    }
    // sending data to server
    fetch("http://localhost:5000/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            userName:userName,
            email:email,
            password:password
        })
    }).then(res=>res.json())
    .then(data =>{
        if(data.error){
            notifyA(data.error)   
        }else{
            notifyB(data.message)
            navigate("/signin")
        }
        console.log(data)})
  }
  return <div className="signUp">
    <div className="form-container">
        <div className="form">
        <img className="signUpLogo" src={logo} alt="" />
        <p clssName="loginpara">
            Sign up to see photos and videos <br/> from your friends
        </p>
        <div>
            <input type="email" name="email" id="email" value={email}
            placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value)
            }} />
        </div>
        <div>
            <input type="text" name="name" id="name" value={name}
            placeholder="Full Name" onChange={(e)=>{
                setName(e.target.value)
            }} />
        </div>
        <div>
            <input type="text" name="username" id="username" value={userName}
            placeholder="Username" onChange={(e)=>{
                setUserName(e.target.value)
            }} />
        </div>
        <div>
            <input type="password" name="password" id="password" value={password}
            placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>
        <p className="loginPara" style={{fontSize:"12px",margin:"3px 0px"}}>
            By signing up, you agree to our Terms,<br /> privacy 
            policy and 
            cookies policy.
        </p> 
        <input type="submit" id="submit-btn" value="Sign Up" onClick={()=>{postData()}}/>
        </div>
        <div className="form2">
            Already have an Account ?
            <Link to="/signin">
            <span style={{color:"blue",corsor:"pointer"}}>SignIn</span>
            </Link>
        </div>
    </div>
  </div>
}
