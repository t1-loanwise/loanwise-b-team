import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import FilledBtn from "../../../components/Button/FilledBtn";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";

function SecurityQuestion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    let isValid = Object.keys(errors).length === 0;
    {
      isValid && navigate("/successful");
    }
  };

  const options = [
    {
      value: "what is your mother's name?",
      label: "What is your Mother's name?",
    },
    {
      value: "what is your father's name?",
      label: "What is your Father's name?",
    },
    { value: "where did you grow up?", label: "Where did you grow up?" },
    {
      value: "what university did you attend?",
      label: "What University did you attend?",
    },
  ];
  return (
    <AuthLayout
      title={"Set Security Question"}
      subtitle={
        "To keep your account secured, create 2 security questions and answers"
      }
    >
      <div className="securityQxn">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            className="select"
            placeholder={"Select a question"}
            options={options}
          />
          <fieldset>
            <input
              placeholder={"Enter answer"}
              {...register("select1", { required: true })}
              type="text"
              id="select1"
            />
            {errors.select1?.type === "required" && (
              <p className="errorMessage">
                You must select a question and enter an answer
              </p>
            )}
          </fieldset>

          <Select
            className="select"
            placeholder={"Select a question"}
            options={options}
          />
          <fieldset>
            <input
              placeholder={"Enter answer"}
              {...register("select2", { required: true })}
              type="text"
              id="select2"
            />
            {errors.select2?.type === "required" && (
              <p className="errorMessage">
                You must select a question and enter an answer
              </p>
            )}
          </fieldset>
          <div className="form-btn">
            <FilledBtn title={"Proceed"} type={"submit"} />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SecurityQuestion;
