import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";

const SecurityQuestion = () => {
  return (
    <AuthLayout
      title={"Set Security Question"}
      subtitle={
        "To keep your account secured, create 2 security questions and answers"
      }
    >
      <div>
        <form>
          <Select placeholder={"Select a question"} options={options} />
          <FormField placeholder={"Enter answer"} />
          <Select placeholder={"Select a question"} options={options} />
          <FormField placeholder={"Enter answer"} />
          <FilledBtn title={"Proceed"} size={"100%"} />
        </form>
      </div>
    </AuthLayout>
  );
};

export default SecurityQuestion;
