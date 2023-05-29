import React from 'react'
import FilledBtn from '../../../components/Button/FilledBtn'
import FormField from '../../../components/Form/FormField'
import AuthLayout from '../../../components/Layout/AuthLayout'
import '../EmailVerify/EmailVerify.css'


const EmailVerify = () => {
  return (
    <AuthLayout title={"Verify Email Address"} subtitle={"Please enter the verification code we sent to your registered email address @johndoe@gmail.com"}>
      <form class="container">

        <div className="userInput">

        <div className="otp_input-Content">
        <FormField type={"text"} maxlength={"1"} className="otp_input" id="ist" onkeyup="clickEvent(this,'ist')" />
        </div>

        <div className="otp_input-Content">
        <FormField type={"text"} maxlength={"1"} className="otp_input" id="sec" onkeyup="clickEvent(this,'sec')" />
        </div>

        <div className="otp_input-Content">
        <FormField type={"text"} maxlength={"1"} className="otp_input" id="third" onkeyup="clickEvent(this,'third')" />
        </div>
        
        <div className="otp_input-Content">
        <FormField type={"text"} maxlength={"1"} className="otp_input" id="fourth" onkeyup="clickEvent(this,'fourth')" />
        </div>
          
        </div>

        <div className="Verify-btn-Content">
        <FilledBtn title={"Verify"} size={"100%"} className="Verify-btn" />
      </div>

        <div className="OTP-Content">
                Don't get OTP?
                <a href="../re" target="_blank" rel="noopener noreferrer">
                  Resend in 60s
                </a>
        </div>

      </form>
    </AuthLayout>
  )
}

export default EmailVerify;