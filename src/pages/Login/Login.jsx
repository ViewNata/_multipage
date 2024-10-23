import { verifyUser } from '../../data/users';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

import './Login.css';

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    return (
        <div className='login-container'>
            <img src="img1/working.png" alt="login cartoon" className="login-cartoon" />

            <h2>Login</h2>

            <Form.Label htmlFor="inputUsername">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder="user"
                style={{ textAlign: 'center' }}
                ref={userRef}
            />

            <Form.Label htmlFor="inputPassword">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder="pass"
                style={{ textAlign: 'center' }}
                ref={passRef}
                title="Password"
            />

            <button className='btn btn-primary mt-3' onClick={() => {
                const user = userRef.current.value;
                const pass = passRef.current.value;

                userRef.current.value = '';
                passRef.current.value = '';
                
                const userInfo = verifyUser(user, pass);
                
                if (userInfo == null) {
                    alert('Wrong username or password');
                    userRef.current.focus();
                } else {
                    setToken(userInfo.token);
                    setRole(userInfo.role);
                }
            }}>
                Login
            </button>
        </div>
    );
}

export default Login;
