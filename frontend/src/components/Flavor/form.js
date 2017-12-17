import React from "react";
import { Field, reduxForm } from "redux-form";

const FlavorForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, flavor } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder={flavor == null ? "Name" : flavor.name}
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field
            name="description"
            component="input"
            type="textarea"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {" "}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export const FlavorFormComponent = reduxForm({
  form: "flavorForm"
})(FlavorForm);
