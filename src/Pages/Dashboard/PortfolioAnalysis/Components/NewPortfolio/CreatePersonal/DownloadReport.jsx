import React from "react";
import success from "../../../../../../Images/Dashboard/success.svg";
import { Button } from "@chakra-ui/react";

const DownloadReport = () => {
  return (
    <form className="new-portfolio-form">
      <div className="successReport">
        <h3>Customer’s ID: #012346789</h3>
        <img src={success} alt="pass" />
        <div>
          <p>
            Congratulations, borrower is not likely to default on this loan amount
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
            Proceed
          </Button>
        </div>
      </div>
    </form>
  );
};

export default DownloadReport;
