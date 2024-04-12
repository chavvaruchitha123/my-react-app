import React from "react";
import'./login.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layout/navbar/Navbar";
import AuthForm from "../../components/forms/AuthForm/AuthForm";
const Login=()=>{
    return(
        <React.Fragment>
            <Navbar darkText={true}/>
        <section className="signup-container">
            <div className="signup-img-container">
                   <img src={AuthBgImg} alt="authentication"/>
                </div>
                <div className="signup-content-container">
                    <div className="container">
                    <div className="content-wrapper">
                        <h2>Login</h2>
                        <p>Sign in with email and password </p>
                        <AuthForm buttonName="Login"></AuthForm>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}
export default Login