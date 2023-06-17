import React from "react";
import "../../styles/Portfolio.css";
import DetailsForm from "../../components/DetailsForm";
import { useState } from "react";
import LoanInfo from "../../components/LoanInfo";
import { useForm } from "react-hook-form";


function BusinessDetails() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
  
    const updateUser = (data) => {
      setUser((prevUser) => ({ ...prevUser, ...data }));
    };
    const { handleSubmit } = useForm();
    const onSubmit = (data) => {
      updateUser(data);
      navigate("/businessStatement");
    };
    return (
      <>
        <ProgressBar />
        <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form_container">
            <DetailsForm
              user={user}
              Title={"Business Information"}
              text={"Business Name"}
              address={"Business address"}
              date={"Date of Registration"}
              number={"CAC Reg. No"}
              subject={"Business Owner"}
            />
            <p className="auto_fill">Auto-fill from loan applications</p>
            <LoanInfo />
            <p className="auto_fill">Auto-fill from loan applications</p>
            <button className="form_btn">Proceed</button>
          </div>
        </form>
      </>
    );
  }
  
  export default BusinessDetails;