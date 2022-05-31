import React, { useState } from 'react'
import './Login.styles.css'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../utils/firebase';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const signIn = (e) => {
        e.preventDefault();
        //firebase
        signInWithEmailAndPassword(auth, email, password).then((credentials) => {
            const user = credentials.user

            if(credentials){
                navigate('/')
            }
            console.log(user)

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('error:', error.errorCode)
        })

        setEmail("")
        setPassword("")
    }

  

    const register = (e) => {

        e.preventDefault();

        //firebase
        createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
            if (credentials) {
                navigate('/')
            }
            console.log(credentials)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('error:', error.errorCode)
        })

        setEmail("")
        setPassword("")
    }
    //handleChange
    return (
        <div className='login'>

            <Link to='/'>
                <img className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=" Amazon logo" />

            </Link>

            <div className="login__container">

                <h1>
                    Sign-in
                </h1>
                <form action="">

                    <h5>Email</h5>
                    <input type="email" value={email} onChange={((e) => (setEmail(e.target.value)))} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing in You A gree to amazon Conditions of Use &Sale.Please see our Privacy Notice, our Cookie Notice and Interest-Based Ads Notice
                </p>

                <button className='login__registerButton' onClick={register}>Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login