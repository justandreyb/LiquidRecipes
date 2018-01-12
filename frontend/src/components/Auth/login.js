import React from "react"
import { Field, reduxForm } from "redux-form"

const Login = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password"/>
      </div>
      <div>
        <button type="submit" onSubmit={handleSubmit} disabled={pristine || submitting}>Sign in</button>
      </div>
    </form>
  )
};

export const LoginForm = reduxForm({
  form: "signIn"
})(Login);
