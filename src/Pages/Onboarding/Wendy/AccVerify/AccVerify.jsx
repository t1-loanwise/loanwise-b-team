// import FilledBtn from "../../../../components/Button/FilledBtn";
// import AuthLayout from "../../../../components/Layout/AuthLayout";
// import "./AccVerify.css";
// import { useNavigate } from "react-router-dom";

// const AccVerify = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/successful");
//   };

//   const formFooter = (
//     <p>
//       Didn’t get OTP?{" "}
//       <a href="../re" target="_blank" rel="noopener noreferrer">
//         Resend in 60s
//       </a>
//     </p>
//   );
//   return (
//     <AuthLayout
//       title={"Verify Email Address"}
//       subtitle={
//         "Thank you for signing up. Please enter the verification code we sent to your email address @johndoe@gmail.com"
//       }
//       formFooter={formFooter}
//     >
//       <form class="form">
//         <div className="otp_input-Content">
//           <div className="otp_input-items">
//             <FormField
//               type={"number"}
//               maxlength={"1"}
//               className="otp_input"
//               id="ist"
//               onkeyup="clickEvent(this,'ist')"
//             />
//           </div>

//           <div className="otp_input-items">
//             <FormField
//               type={"number"}
//               maxlength={"1"}
//               className="otp_input"
//               id="sec"
//               onkeyup="clickEvent(this,'sec')"
//             />
//           </div>

//           <div className="otp_input-items">
//             <FormField
//               type={"number"}
//               maxlength={"1"}
//               className="otp_input"
//               id="third"
//               onkeyup="clickEvent(this,'third')"
//             />
//           </div>

//           <div className="otp_input-items">
//             <FormField
//               type={"number"}
//               maxlength={"1"}
//               className="otp_input"
//               id="fourth"
//               onkeyup="clickEvent(this,'fourth')"
//             />
//           </div>
//         </div>

//         <div className="form-btn">
//           <FilledBtn title={"Verify"} size={"100%"} className="Verify-btn" />
//         </div>
//       </form>
//     </AuthLayout>
//   );
// };

// export default AccVerify;
