import React from "react";
import { Field, reduxForm } from "redux-form";

const CommentForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Notes</label>
        <div>
          <Field name="text" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export const CommentFormComponent = reduxForm({
  form: "commentForm" // a unique identifier for this form
})(CommentForm);
