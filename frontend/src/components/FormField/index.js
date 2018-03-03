import React from "react"
import {Field} from "react-final-form";

const FormComponent = (props) =>
  <Field
    name={props.name}
    validate={props.validate}
  >
    {({input, meta}) =>
      <div className="form__component">
        <label className="form__field">
          <input className={meta.error && meta.touched ? "form__input form__input--invalid" : "form__input"} {...input} type={props.type || "text"} />
          <span className={meta.touched ? "form__label form__label--touched" : "form__label"}>{props.label}</span>
        </label>
        {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
      </div>
    }
  </Field>
;

export const FormField = FormComponent;
