import React from "react"
import { Form, Field } from "react-final-form"
import {composeValidators, minLength, required, valuesEqual} from "../../modules/App/Form/validators";

const Registration = (props) => {
  const onSubmit = (data) => {
    if (valuesEqual(data.password, data.rePassword))
      props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, submitting}) =>
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            validate={required}
          >
            {({input, meta}) =>
              <div>
                <label>Name</label>
                <input {...input} type="text" placeholder="Name"/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="email"
            validate={required}
          >
            {({input, meta}) =>
              <div>
                <label>Email</label>
                <input {...input} type="email" placeholder="Email"/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="password"
            validate={composeValidators(required, minLength(8))}
          >
            {({input, meta}) =>
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password"/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            }
          </Field>

          <Field
            name="rePassword"
            validate={composeValidators(required, minLength(8))}
          >
            {({input, meta}) =>
              <div>
                <label>Password repeat</label>
                <input {...input} type="password" placeholder="Password"/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            }
          </Field>

          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
      }
    />)
};

export const RegistrationForm = Registration;
