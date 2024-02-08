import React, { useEffect, useState } from "react";
import "./Login.scss"
import GoogleIcon from "@mui/icons-material/Google"
import {Link} from "react-router-dom";
import axios from "axios";
import Profile from "../Profile/Profile";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userGoogle, setUserGoogle] = useState([])
    const [profileGoogle, setProfileGoogle] = useState([]);
 


    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await axios.post(process.env.REACT_APP_API_URL+ "/auth/login", {
                username: `${username}`,
                password: `${password}`
           })
           sessionStorage.setItem("authToken", res.data.accessToken);
           sessionStorage.setItem("userId", res.data._id);
           sessionStorage.setItem("username", res.data.username);
           
        }catch(err){
            console.log(err);
        }
       

    }

    const loginGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => setUserGoogle(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if(userGoogle) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${userGoogle.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res)=> {
                    setProfileGoogle(res.data);
                    sessionStorage.setItem("username", res.data.name);
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
            }
        },
        [userGoogle]
    );

    return (

        <div className="login">
            <div className="left">
                <img src="https://images.pexels.com/photos/2528001/pexels-photo-2528001.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            </div>
            {sessionStorage.getItem("authToken") ? <Profile username={sessionStorage.getItem("username")}/> :
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
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button type="submit">SIGN IN</button>
                </form>
                <div className="or">
                    <span>OR</span>
                </div>
                <div className="createAccount">
                   <Link className="link" to="/hughstore/create-account"><button>CREATE NEW ACCOUNT</button></Link>
                </div>    
                <div className="google">
                    <button onClick={() => loginGoogle()}><GoogleIcon className="googleIcon"/>SIGN IN WITH GOOGLE</button>
                </div>
            </div>}
        </div>
    )
};

export default Login