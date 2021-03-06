import {React, useState} from 'react';
import './Login.css';


const Login = ({ setToken, userName, setUserName }) =>{
// const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

// const history = useHistory();

const handleEmailChange = (e) => {
    setUserName(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        // email: 'Piotr',
        password: '12345678'
    }

    // if ((userName === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
    if (passwordInput === hardcodedCred.password ) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        const token = '123456abcdef';
        setToken(token)
        sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
        // history.push('/todo');
    } else {
        //bad combination
        // notifyinvalid();
        alert('wrong email or password combination');
    }
}

return (
    <div className="login-page">
        <h2>Login</h2>
        <form autoComplete="off" onSubmit={handleLoginSubmit}>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter User ID"
                value={userName}
                onChange={handleEmailChange}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
      </form>
    </div>
  );
}

export default Login;