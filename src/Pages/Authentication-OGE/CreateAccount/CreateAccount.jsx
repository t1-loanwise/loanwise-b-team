import React from 'react'
import FilledBtn from '../../../components/Button/FilledBtn'
import FormField from '../../../components/Form/FormField'
import AuthLayout from '../../../components/Layout/AuthLayout'
import '../CreateAccount/CreateAccount.css'


const CreateAccount = () => {
  return (
    <>
      <AuthLayout title={"Create an account"} >
        <div className="form__wrapper">
          <form className="form" >
            <div className="form-body">

              <div className="input-Content fullname-Content">
                <FormField label={"Full Name"} type={"text"} placeholder={"Enter full name"} className="form__input" id="fullname" />
              </div>

              <div className="input-Content email-Content">
                <FormField label={"Email Address"} type={"email"} placeholder={"Enter Email Address"} className="form__input" id="email" />
              </div>

              <div className="input-Content password-Wrapper">

                <div className="password-Content">
                  <div className="input-Content password-Content">
                    <FormField label={"Password"} type={"password"} className="form__input" id="password" />
                  </div>

                  <div className="input-Content confirmPassword-Content">
                    <FormField label={"Confirm Password"} type={"password"} className="form__input" id="confirmPassword" />
                  </div>
                </div>

                <div className="Password-characters">
                  Password must contain at least 6 characters including numbers
                </div>

              </div>

              <div className="terms-and-conditions">
                <input type="radio" className="form__input" id="radio" />
                <span>
                  <label htmlFor="terms">
                    I agree to the terms of service and privacy policy
                  </label>
                </span>
              </div>

              <div className="input-Content FilledBtn">
                <FilledBtn title={"Create Account"} size={"100%"} className="btn" />
              </div>

              <div className="Sign-In-Content">
                Already have an account?
                <a href="../login" target="_blank" rel="noopener noreferrer">
                  Sign In
                </a>
              </div>

            </div>
          </form>

        </div>
      </AuthLayout>
      {/* https://www.section.io/engineering-education/registration-form-react.js-firebase/ */}

    </>
  )
}

export default CreateAccount;