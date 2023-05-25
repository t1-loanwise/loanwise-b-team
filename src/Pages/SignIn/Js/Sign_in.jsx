import "./SignIn.css"
const SignIn= ({ SignIn}) => {
    return (
        <section className="SignIn-Container">
            <div className="SignIn-Content">
                <div>
                    <CreditScoreimg />
                </div>

                <div className="form-Wrapper">
                    <h1>Welcome Back!</h1>
                    <p>Enter your details to sign in</p>
                    {/* <loanWiselogo/> */}
                    <form action="" method="post">

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

                            </div>

                        </div>
                        <div className="terms-and-conditions">
                            <input type="check-box" name="" id="" />Keep me signed in   Forgot Password?
                        </div>

                        <button className="Create-button">Sign In</button>
                        <div className="Sign-In-Content">
                            Don't have an account? <a href="http://" target="_blank" rel="noopener noreferrer"> Sign Up</a>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignIn;