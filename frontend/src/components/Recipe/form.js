import React from "react";
import { Form, Field } from "react-final-form"
import { FieldArray } from "react-final-form-arrays"

const required = (value) => value ? undefined : "Required";

const renderItems = ({flavors, fields, meta: { touched, error, submitFailed } }) =>
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add flavor</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((item, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove item"
          onClick={() => fields.remove(index)}>
          Remove item #{index + 1}
        </button>
        <h4>Item #{index + 1}</h4>
        <div>
          <label>Flavor</label>
          <div>
            <Field name={`${item}.flavorId`} component="select" validate={required}>
              {
                flavors.map((flavor) =>
                  <option key={flavor.id} value={flavor.id}>{flavor.name}</option>
                )
              }
            </Field>
          </div>
        </div>
        <div>
          <label>Ml</label>
          <div>
            <Field
              validate={required}
              parse={(value) => Number(value)}
              name={`${item}.ml`}
              component="input"
              step="0.1"
              type="number"
            />
          </div>
        </div>
        <div>
          <label>Drops</label>
          <div>
            <Field
              validate={required}
              parse={(value) => Number(value)}
              name={`${item}.drops`}
              component="input"
              type="number"
            />
          </div>
        </div>
      </li>
    )}
  </ul>
;

const RecipeForm = (props) => {
  const onSubmit = (data) => {
    props.processSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, pristine, submitting, recipe, flavors}) =>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <div>
              <Field
                validate={required}
                name="name"
                component="input"
                type="text"
                placeholder={recipe == null ? "Name" : recipe.name}
              />
            </div>
          </div>
          <div>
            <label>Description</label>
            <div>
              <Field
                validate={required}
                name="description"
                component="textarea"
                type="text"
                placeholder={recipe == null ? "" : recipe.description}
              />
            </div>
          </div>
          <div>
            <label>PG</label>
            <div>
              <Field
                validate={required}
                parse={(value) => Number(value)}
                name="pg"
                component="input"
                type="number"
                step="0.1"
                placeholder={recipe == null ? 50 : recipe.pg}
              />
            </div>
          </div>
          <div>
            <label>VG</label>
            <div>
              <Field
                validate={required}
                parse={(value) => Number(value)}
                name="vg"
                component="input"
                type="number"
                step="0.1"
                placeholder={recipe == null ? 50 : recipe.vg}
              />
            </div>
          </div>
          <div>
            <label>Nicotine</label>
            <div>
              <Field
                validate={required}
                parse={(value) => Number(value)}
                name="nicotine"
                component="input"
                type="number"
                step="0.1"
                placeholder={recipe == null ? 50 : recipe.nicotine}
              />
            </div>
          </div>
          <div>
            <label>Final amount</label>
            <div>
              <Field
                validate={required}
                parse={(value) => Number(value)}
                name="finalAmount"
                component="input"
                type="text"
                step="0.1"
                placeholder={recipe == null ? 110 : recipe.finalAmount}
              />
            </div>
          </div>

          <FieldArray validate={required} name="flavors" component={renderItems} flavors={flavors}/>

          <div>
            <button type="submit" disabled={pristine || submitting}>Save</button>
          </div>
        </form>
      }
    />
  );
};

export const RecipeFormComponent = RecipeForm;
