import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { useDispatch } from 'react-redux';
import { googleAuthAction, customAuthAction } from '../../../redux/action/authAction';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const { handleSubmit, register } = useForm();

    // email login 
    const onSubmit = async (data) => {
        const userData = {
            email: data.email,
            password: data.password,
        }
        setLoading(true);
        try {
            const res = await axios({
                method: 'post',
                url: 'https://peaceful-spire-94243.herokuapp.com/api/auth/login',
                data: userData
            });
            console.log(res);
            dispatch(customAuthAction(res.data.others));
            if (res) {
                // history.replace(from);
                history.replace("/dashboard")
            }
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    }

    // google signin 
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                // const user = result.user;
                const { email, displayName, photoURL } = result.user;
                setUser({
                    email,
                    displayName,
                    photoURL,
                    role: 'user',
                    token
                })
                // const signInUser = {email};
                dispatch(googleAuthAction({
                    email,
                    displayName,
                    photoURL,
                    role: 'user',
                    token
                }));
                storeAuthToken();
            }).catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                // history.replace(from);
                history.replace("/dashboard")
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div className="text-center">
            <h3>You Must Log In</h3>
            <button className="inner-button-fix mt-5" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
            <div className="flex flex-col container w-full max-w-md  py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8">
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                    Login To Your Account
                </div>
                <div className="mt-8">
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <input defaultValue="test@admin.com" {...register("email")} type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex relative ">
                                <input defaultValue="123456" {...register("password")} type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
                            </div>
                        </div>
                        <div className="flex items-center mb-6 -mt-4">
                            <div className="flex ml-auto">
                                <Link to="/" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                    Forgot Your Password?
                                </Link>
                            </div>
                        </div>
                        <div class="flex w-full">
                            <button type="submit" class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded">
                                {loading ? <div className="spinner-border" role="status">
                                        <span class="visually-hidden"></span>
                                    </div> : "Login"
                                }
                            </button>
                        </div>
                    </form>
                </div>
                {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                <div className="flex items-center justify-center mt-6">
                    <Link to="/signup" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                        <span className="ml-2">
                            You don't have an account?
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Login;