import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "reducers/user";
import { API_URL } from "utils/urls";
import { Button, RegisterButton, LoginButton, ButtonContainer, Wrapper, InsideWrapper, InputContainer, Input, P } from "./GlobalStyles";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector(store => store.user.accessToken);
    useEffect(() => {
        if(accessToken) {
            navigate("/")
        }
    }, [accessToken]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
        }
        fetch(API_URL(mode), options)
            .then(lalalala => lalalala.json())
            .then(potato => {
                if(potato.success) {
                    console.log(potato)
                    dispatch(user.actions.setAccessToken(potato.response.accessToken));
                    dispatch(user.actions.setUsername(potato.response.username));
                    dispatch(user.actions.setUserId(potato.response.id));
                    dispatch(user.actions.setError(null));
                } else {
                    dispatch(user.actions.setAccessToken(null));
                    dispatch(user.actions.setUsername(null));
                    dispatch(user.actions.setUserId(null));
                    dispatch(user.actions.setError(potato.response))
                }
            })
    }
    return(
        <>  
    <Wrapper>
    <h1>Sign up</h1>
    <InsideWrapper>
    <ButtonContainer>
    <RegisterButton
     className="button-secondary"
     type="button"
     onClick={() => setMode("register")}>
   Register
   </RegisterButton>
   <LoginButton
   className="button-secondary"
   type="button"
   onClick={() => setMode("login")}>
  Login
</LoginButton>
</ButtonContainer>
<form onSubmit={onFormSubmit}>
<InputContainer>
<label htmlFor="username"><P>Username:</P></label>
<Input 
type="text" 
id="username" 
value={username} 
onChange={e => setUsername(e.target.value)} />
<label htmlFor="password"><P>Password:</P></label>
<Input 
type="password" 
id="password" 
value={password} 
onChange={e => setPassword(e.target.value)} />
<Button type="submit">Submit</Button>
</InputContainer>
</form>
</InsideWrapper>
</Wrapper>
 </>
);
}

export default Login;