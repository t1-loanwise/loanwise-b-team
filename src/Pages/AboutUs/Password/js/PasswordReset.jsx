import React, {Pages} from "react";
import "./Password.css"

const Password= ({ PasswordRest}) => {
    return (
<section className="Password-Container">
    <div className="Password-content">
        <div>
         <CreditScoreimg />
        </div>

        <div className="form-wrapper">
            <h1>Forgot Password?</h1>
            <p>We've got you, please enter your registered email address</p>
        </div>
            <div>
                <h3 className="form-wrapper">Email Address</h3>
            </div>

            <div className="input-Content email-Content">
             <label htmlFor="email">Email</label><br />
             <input type="email" className="email-input" id="" />
          </div>

          <button className="Create-button"><Proceed></Proceed></button>
    </div>
</section>
    );
};
export default Password;