import React from "react";
import { Form, Field } from "react-final-form"

const NewsForm = (props) => {
  const onSubmit = (data) => {
    props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, pristine, submitting, news}) =>
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
      }
    />
  );
};

export const NewsFormComponent = NewsForm;
