import React from "react";
import { Field, reduxForm } from "redux-form";

const NewsForm = (props) => {
  const { handleSubmit, pristine, submitting, news } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder={news == null ? "Title" : news.title}
          />
        </div>
      </div>
      <div>
        <label>Text</label>
        <div>
          <Field
            name="text"
            component="textarea"
            placeholder={news == null ? "Title" : news.text}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Save</button>
      </div>
    </form>
  );
};

export const NewsFormComponent = reduxForm({
  form: "newsForm"
})(NewsForm);
