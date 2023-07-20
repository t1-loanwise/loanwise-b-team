import React from "react";
import unsuccessful from "../../../../../../Images/Dashboard/unsuccessful.svg";
import { Button } from "@chakra-ui/react";

const UnsuccessfulReport = () => {
  return (
    <form className="new-portfolio-form">
      <div className="successReport">
        <h3>Customer’s ID: #012346789</h3>
        <img src={unsuccessful} alt="pass" />
        <div>
          <p>
            Borrower is likely to default on this loan amount, consider a lesser
            amount
          </p>
        </div>
        <div className="Personalform-btn">
          <Button
            color="#fff"
            bgColor="#007e99"
            type="submit"
            mx="auto"
            px="40px"
            py="12px"
            borderRadius="0"
          >
            Download Report
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UnsuccessfulReport;
