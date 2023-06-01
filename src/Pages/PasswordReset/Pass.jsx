import React, {Pages} from "react";
import "./pass.css"
import bg_img from './img-1.jpg'

const PasswordReset= ({PasswordReset}) => {
    return (
        <section className="Pass-Container">
           <div className="Pass-Content">
                <div className="sub_sect bg_img-container">
                    <img src={bg_img} alt="bg-img" className=""/>
                </div>

               <div className="sub_sect form-Wrapper">
                  <div className="inner_div">
                      <span>
                         <p className="header">Forgot Password?</p>
                         <p className="sub_title">We've got you. please enter your registered email address</p>
                       </span>
                       <span>
                           <form action="" method="post">
                               <div className="input-Content email-Content">
                                 <label htmlFor="email">Email</label><br />
                                 <input type="email" className="email-input" id="" />
                              </div>

                              <button className="Create-button">Proceed</button>
                           </form>
                       </span>
                  </div>
             </div>
           </div>
      </section>
    );
};

export default PasswordReset;