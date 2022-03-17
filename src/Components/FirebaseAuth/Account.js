import React, { useContext, useState } from 'react';
import Header from '../LandingPage/Header.js';
import Navigation from '../Reuse/Navigation.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from './firebase.initial.js';
import Footer from '../Reuse/Footer.js';
import '../../Styles/Account.scss'
import { contextApi } from '../../App.js';
firebaseAuthentication()

const googleProvider = new GoogleAuthProvider();

const Account = () => {
    const [signIn, setSignIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(contextApi);
    const [user, setUser] = useState({
        isSignIn: false,
        userName: '',
        email: '',
        photo: '',
    });

    // ! signIn with google
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { email, displayName, photoURL } = result.user;
                const newUser = {
                    isSignIn: true,
                    userName: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(newUser);
                setLoggedInUser(newUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            });
    }


    // ! toggle signIn / login
    const handleLogin = () => {
        setSignIn(!signIn)
    }
    const handleSignin = () => {
        setSignIn(!signIn)
    }

    return (
        <section className='account'>
            <Header />
            <Navigation />


            {/* login or registration system */}
            <div className='container'>
                <div className='form-header'>
                    <h3>register or login please</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form className='form-fillUp'>
                            <legend>
                                {
                                    signIn ?
                                        <h3 className="text-center mb-4">Sign Up</h3> :
                                        <h3 className="text-center mb-4">Login</h3>
                                }
                            </legend>
                            {
                                signIn &&
                                <div className="form-group my-3">
                                    <input type="text" name="" id="" className="form-control rounded-0" placeholder='Enter Name' required />
                                </div>
                            }
                            <div className="form-group my-3">
                                <input type="email" name="" id="" className="form-control rounded-0" placeholder='Enter Email' required />
                            </div>
                            <div className="form-group my-3">
                                <input type="password" name="" id="" className="form-control rounded-0" placeholder='Enter Password' required />
                            </div>
                            <div className="form-group my-3">
                                {
                                    signIn ?
                                        <input type="input" name="" id="" className="form-control btn btn-outline-dark rounded-0" value="SIGNUP" />
                                        :
                                        <input type="input" name="" id="" className="form-control btn btn-outline-dark rounded-0" value="LOGIN" />
                                }
                            </div>
                        </form>

                        <div className='text-center mt-4 condition-btn'>
                            {
                                signIn ?
                                    <div>
                                        <span className='d-inline-block text-capitalize'>all ready have an account?</span>
                                        <span className='log-btn' onClick={handleLogin}>Login</span>
                                    </div>
                                    :
                                    <div>
                                        <span className='d-inline-block text-capitalize'>don't have an account?</span>
                                        <span className='sign-btn' onClick={handleSignin}>SignUp</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* continue with google */}
            <div className='text-center mt-4'>
                <span>-------------- OR --------------</span>
            </div>
            <div className="container mt-4">
                {/* ---------- google signIn authentication --------- */}
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <button className='form-control btn btn-outline-dark rounded-0 py-3 text-uppercase' onClick={handleGoogleSignIn}>
                                <i class="fab fa-google me-5" style={{ fontSize: '22px' }}></i>
                                Continue with google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Account;