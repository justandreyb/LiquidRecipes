import React from "react"
import { Form } from "react-final-form"
import {required} from "../../modules/App/Form/validators";
import {FormField} from "../FormField";

const Login = (props) => {
  const onSubmit = (data) => {
    props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, submitting}) =>
        <form className="authentication__form form" onSubmit={handleSubmit}>

          <FormField name="email" type="email" label="Email" validate={required} />
          <FormField name="password" type="password" label="Password" validate={required} />

          <button type="submit" className="form__submit-button" disabled={submitting}>Submit</button>
        </form>
      }
    />)
};

export const LoginForm = Login;
