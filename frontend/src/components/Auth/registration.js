import React from "react"
import { Field, reduxForm } from "redux-form"

const Registration = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="name"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password"/>
      </div>
      <div>
        <button type="submit" onSubmit={handleSubmit} disabled={pristine || submitting}>Sign up</button>
      </div>
    </form>
  )
};

export const RegistrationForm = reduxForm({
  form: "signUp"
})(Registration);
