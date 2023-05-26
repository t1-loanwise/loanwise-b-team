import React from "react";
import CreditScoreimg from "../js/CreditScoreimg";
import "../css/SignUP.css";

const SignUP = ({ SignUP }) => {
    return (
        <section className="SignUP-Container">
            <div className="SignUP-Content">
                <div>
                    <CreditScoreimg />
                </div>

                <div className="form-Wrapper">
                    <h1>Create an account</h1>
                    {/* <loanWiselogo/> */}
                    <form action="" method="post">

                        <div className="input-Content fullname-Content">
                            <label htmlFor="fullname">Fullname</label><br />
                            <input type="text" className="fullname-input" />
                        </div>

                        <div className="input-Content email-Content">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" className="email-input" id="" />
                        </div>

                        <div className="input-Content password-Wrapper">
                            <div className="password-Container">
                                <div className="password-Content">
                                    <label htmlFor="password">Password</label><br />
                                    <input type="password" className="input-items" id="" />
                                </div>
                                <div className="confirmPassword-Content">
                                    <label htmlFor="confirmPassword">confirm Password</label><br />
                                    <input type="password" className="input-items" id="" />
                                </div>
                            </div>
                            <div className="Password-characters">
                                Password must contain at least 6 characters including numbers
                            </div>
                        </div>
                        <div className="terms-and-conditions">
                            <input type="radio" name="" id="" />I agree to the terms of service and privacy policy
                        </div>

                        <button className="Create-button">Create Account</button>
                        <div className="Sign-In-Content">
                            Already have an account? <a href="http://" target="_blank" rel="noopener noreferrer"> Sign In</a>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUP;
