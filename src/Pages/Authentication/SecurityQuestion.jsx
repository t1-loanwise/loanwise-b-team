import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import FormField from "../../components/Form/FormField";
import FilledBtn from "../../components/Button/FilledBtn";


function SecurityQuestion() {
  return (
    <AuthLayout
    title={"Set Security Question"}
    subtitle={
      "To keep your account secured, create 2 security questions and answers"
    }
  >
    <div>
      <form>
        <FormField type={"select"} placeholder={"Select a question"} />
        <FormField placeholder={"Enter answer"} />
        <FormField placeholder={"Select a question"} />
        <FormField placeholder={"Enter answer"} />
        <FilledBtn title={"Proceed"} size={"100%"} />
      </form>
    </div>
    </AuthLayout>
  )
}

export default SecurityQuestion