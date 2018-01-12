import React from "react";
import { Field, reduxForm } from "redux-form";

const CommentForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="text" component="textarea" maxlength="255" placeholder="Enter your comment here" />
      <button type="submit" disabled={pristine || submitting}>Send</button>
    </form>
  );
};

export const CommentFormComponent = reduxForm({
  form: "commentForm"
})(CommentForm);
