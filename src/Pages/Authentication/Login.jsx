import React from 'react'
import AuthLayout from '../../components/Layout/AuthLayout'
import FormField from '../../components/Form/FormField'
import FilledBtn from '../../components/Button/FilledBtn'

const Login = () => {
  return (
    <AuthLayout title={"Welcome Back!"} subtitle={"Enter your details to sign in"}>
    
    
<div className='login-container'>
  <form action="">
  <FormField label={"Email address"} placeholder={"Enter email address"}/>
  <FormField label={"Password"} type={"password"} value={"password"} />
  <div className='text-below'>
   <input type='checkbox' name='Keep me signed in' /> Keep me signed in 
   <p>Forgot Password?</p>
  </div>
  <FilledBtn title={"Submit"} size={"100%"}/> 
  </form>

</div>
    </AuthLayout>



  )
}

export default Login