import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import FormField from "../../components/Form/FormField";
import FilledBtn from "../../components/Button/FilledBtn";
import Select from "react-select";


function SecurityQuestion() {
  const options = [
    {value: "what is your mother's name?", label: "What is your Mother's name?"},
    {value: "what is your father's name?", label: "What is your Father's name?"},
    {value: "where did you grow up?", label: "Where did you grow up?"},
    {value: "what university did you attend?", label: "What University did you attend?"},
  ];

  return (
    <AuthLayout
    title={"Set Security Question"} 
    subtitle={"To keep your account secured, create 2 security questions and answers"} 
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
  )
}

export default SecurityQuestion