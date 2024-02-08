import React, { useState } from "react";
import "./CreateAccount.scss"
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";



const CreateAccount = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [popupTrigger, setPopupTrigger] = useState(false);

    const handlePopupState = () =>{
        setPopupTrigger(false);
        
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        try{
            const res = await axios.post(process.env.REACT_APP_API_URL+ "/auth/register", {
            username: `${username}`,
            email: `${email}`,
            password: `${password}`
            })
            if(res.data){
                setPopupTrigger(true);
            }
        }catch(err){
            console.log(err);
        }
       

    }

    return (
        <>
        <div className="createAccount">
            <div className="left">
                <img src="https://images.pexels.com/photos/2528001/pexels-photo-2528001.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            </div>
            <div className="right">
            <form method="post" className="inputForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        value={username} 
                        placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <input 
                        type="text" 
                        id="email"
                        name="email" 
                        value={email}
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button type="submit">CREATE ACCOUNT</button>
                </form>
                <div className="backToLogin">
                <Link to="/hughstore/login-page" className="link"><span>BACK TO LOGIN</span></Link>
            </div>
            </div>    
        </div>
        <Popup trigger={popupTrigger} handlePopupState={handlePopupState}/>
        </>
    )
};

export default CreateAccount