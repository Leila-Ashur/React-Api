import React, {useState} from "react";
import './style.css'
const Login=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassward]=useState('')
    
    const handleSubmit=async(e) =>{
        e.preventDefault();
        const data ={
            username:username,
            password:password
        }
        try{
            const response =await  fetch  ('https://dummyjson.com/auth/login',{
               method:'POST',
               headers:{ 
                'content-Type':'application/json'
               } ,
               body:JSON.stringify(data)
            } )
            const result= await response.json()
            console.log({result});
        }
        catch(error){
            console.log(error.message);
        }

    }
    return(
       
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username" type="text"
                onChange={(e)=>{setUsername(e.target.value)}}/>
                <br/>
                <br/>
                <input placeholder="Enter password" type="password"
                onChange={(e)=>{setPassward(e.target.value)}}/>
                <br/>
              <br/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;






