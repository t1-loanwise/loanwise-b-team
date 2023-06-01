import React, {Pages} from "react";
import "./SignIn.css"
import bg_img from './img-1.jpg'

const SignIn= ({ SignIn}) => {
    return (
        <section className="SignIn-Container">
            <div className="SignIn-Content">
                <div className="sub_sect bg_img-container">
                    <img src={bg_img} alt="bg-img" className=""/>
                </div>

                <div className="sub_sect form-Wrapper">
                    <div className="inner_div">
                        <span>
                            <p className="header">Welcome Back!</p>
                            <p className="sub_title">Enter your details to sign in</p>
                        </span>
                        <span>
                            <form action="" method="post">
                                <div className="input-Content email-Content">
                                    <label htmlFor="email">Email</label><br />
                                    <input type="email" className="email-input" id="" />
                                </div>

                                <div className="input-Content password-Content">
                                    <label htmlFor="password">Password</label><br />
                                    <input type="password" className="input-items" id="" />
                                </div>
                                
                                <div className="actions">
                                    <div className="keep_signed">
                                        <input type="checkbox" name="" id="" />Keep me signed in
                                    </div>
                                    <div className="forgot_password">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </div>

                                <button className="Create-button">Sign In</button>

                            </form>
                        </span>
                    </div>
                    <div className="Sign-In-Content">
                        <span>
                            Don't have an account? <a href="http://" target="_blank" rel="noopener noreferrer"> Sign Up</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;