import React, { useState } from "react";
import BurrowerDetail from "./BurrowerDetail";
import PersonalInfo from "./PersonalInfo";
import EmploymentInfo from "./EmploymentInfo";
import DownloadReport from "./DownloadReport";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../../../../components/SideBar/SideBar";
import DashboardHeader from "../../../../../../components/SideBar/DashboardHeader";
import {
  Button,
  Step,
  Stack,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";


const CreatePersonal = () => {
  const [back, setBack] = useState(true);
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(2);

  const handleNext = () => {
    activeStep < 3 && !(activeStep >= 3) && setActiveStep(activeStep + 1);
  };

  const steps = [
    <PersonalInfo handleNext={handleNext} />,
    <EmploymentInfo />,
    <DownloadReport />,
  ];

  const backLink = () =>
  activeStep === 0 ?  navigate('/dashboard/portfolio') : activeStep <= 2 && !(activeStep < 1) && setActiveStep(activeStep - 1);

  const activeStepText = steps[activeStep];

  return (
    <div className="dashboard-wrapper">
      <DashboardHeader back={back} backLink={backLink} />
      <div className="dashboard-body">
        <SideBar />
        <div className="dashboard-pages-wrapper">
          <div className="createPersonal container">
            <div className="createPersonalWrapper">
              <Stack>
                <Stepper size="md" index={activeStep} gap="0" mb={'20px'} colorScheme='teal'>
                  {steps.map((step, index) => (
                    <Step key={index} gap="0" >
                      <StepIndicator >
                        <StepStatus />
                      </StepIndicator>
                      <StepSeparator bgColor={'#e6f2f5'} _horizontal={{ ml: "0", height: "2" }} />
                    </Step>
                  ))}
                </Stepper>
              </Stack>
              {activeStepText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePersonal;
