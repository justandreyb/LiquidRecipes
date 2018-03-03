import React from "react"
import { Form } from "react-final-form"
import {composeValidators, minLength, required, valuesEqual} from "../../modules/App/Form/validators";
import {FormField} from "../FormField";

const Registration = (props) => {
  const onSubmit = (data) => {
    if (valuesEqual(data.password, data.rePassword))
      props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, submitting}) =>
        <form className="authentication__form form" onSubmit={handleSubmit}>

          <FormField name="name" label="Name" validate={required} />
          <FormField name="email" type="email" label="Email" validate={required} />
          <FormField name="password" type="password" label="Password" validate={minLength(8)} />
          <FormField name="rePassword" type="password" label="Repeat Password" validate={composeValidators(required, minLength(8))} />

          <button type="submit" className="form__submit-button" disabled={submitting}>
            Submit
          </button>
        </form>
      }
    />)
};

export const RegistrationForm = Registration;
