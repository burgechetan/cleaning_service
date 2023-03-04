import { useReducer, useState  } from "react";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {login} from '../redux/slice';
 

function Login()
{
    const reduxDispatch = useDispatch();
    const init={
        uid:"",
        password:""
    }
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case "update":
                return {...state,[action.field]:action.val}
            case "reset":
                return init
        }
    }

    const sendData=(e)=>{
        e.preventDefault();
        const reqOption={
            method:"post",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(login_info)
        }
        fetch("http://localhost:8080/checkLogin",reqOption)
        .then(resp=>{
            if(resp.ok)
                return resp.text();
            else
                throw new Error("Server error");
        })
        .then(text=>text.length ? JSON.parse(text):{})
        .then(obj=>{
            if(Object.keys(obj).length===0)
            {
               setMessage("Wrong uid/password");
             
            }
            else{
                if(obj.status=== false)
                {
                    alert("Request has not been approved");
                }
                else
                {
                    reduxDispatch(login());
                    if(obj.role_id.role_id === 1)
                    {
                        navigate("/customer_home");
                    }
                    else if(obj.role_id.role_id === 2)
                    {
                        navigate("/serviceprovider_home");
                    }
                    else if(obj.role_id.role_id === 3)
                    {
                        navigate("/admin_home");
                    }
                }
            }

        })
        .catch((error)=>{alert("Server error, try after some time")});
    }

   const [login_info,dispatch]=useReducer(reducer,init);
   const [message,setMessage]=useState("");
   const navigate=useNavigate();
   

    return(
        <div className="imgF height">
            <div className="container">
                <h1 className="head"> Login </h1>
                <div className="row">
                <div className="column" >
                <form>
                    <div className="mb-3">
                        <label htmlFor="uid" className="form-label">Enter uid : </label>
                        <input type="text" name="uid" id="uid" className="form-control"  required value={login_info.uid} onChange={(e)=>{dispatch({type:"update",field:"uid",val:e.target.value})}} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Enter password : </label>
                        <input type="password" name="pd" id="pwd" className="form-control" required value={login_info.password} onChange={(e)=>{dispatch({type:"update",field:"password",val:e.target.value} )}}/>
                    </div>
                     
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{sendData(e)}}>Login</button>
                        <button type="reset" className="btn btn-primary mb-3" onClick={()=>{dispatch({type:"reset"} )}}>Reset</button>
                    </div>
                </form>                    
            </div>
        </div>
    { /*<p>{JSON.stringify(login_info)}</p> */}
    <p style={{color: "red"}}>{message}</p>
    </div>  
    </div>  
     )
}
export default Login;