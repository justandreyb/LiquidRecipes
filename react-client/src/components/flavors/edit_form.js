import React from "react";
import { Form, Field } from "react-final-form"

const FlavorForm = (props) => {
  const onSubmit = (data) => {
    props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, pristine, submitting, flavor, manufacturers}) =>
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
                placeholder={flavor == null ? "" : flavor.description}
              />
            </div>
          </div>
          <div>
            <label>Manufacturer</label>
            <div>
              <Field name="manufacturerId" component="select">
                {
                  manufacturers.map((manufacturer) =>
                    <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                  )
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Flavor type</label>
            <div>
              <Field name="type" component="select">
                <option value="Fruit">Fruit</option>
                <option value="Tobacco">Tobacco</option>
                <option value="Backed">Backed</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Other">Other</option>
              </Field>
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

export const FlavorFormComponent = FlavorForm;
