import React from "react";
import { Field, reduxForm } from "redux-form";

const CommentForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Create comment</label>
        <div>
          <Field name="text" component="textarea" />
        </div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </form>
    </div>
  );
};

export const CommentFormComponent = reduxForm({
  form: "commentForm" // a unique identifier for this form
})(CommentForm);
