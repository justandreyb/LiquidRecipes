import React from "react";
import { Form, Field } from "react-final-form"

const CommentForm = (props) => {
  const onSubmit = (data) => {
    props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, submitting, pristine}) =>
        <form className="comments__form" onSubmit={handleSubmit}>
          <Field name="text" component="textarea" maxLength="255" placeholder="Enter your comment here"/>
          <button type="submit" disabled={pristine || submitting}>Send</button>
        </form>
      }
    />
  );
};

export const CommentFormComponent = CommentForm;
