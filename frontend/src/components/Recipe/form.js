import React from "react";
import { Field, reduxForm } from "redux-form";

const RecipeForm = (props) => {
  const { handleSubmit, pristine, submitting, flavor: recipe, flavors } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field
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
            name="description"
            component="input"
            type="textarea"
            placeholder={recipe == null ? "" : recipe.description}
          />
        </div>
      </div>
      <div>
        <label>PG</label>
        <div>
          <Field
            name="pg"
            component="input"
            type="number"
            placeholder={recipe == null ? 50 : recipe.pg}
          />
        </div>
      </div>
      <div>
        <label>VG</label>
        <div>
          <Field
            name="vg"
            component="input"
            type="number"
            placeholder={recipe == null ? 50 : recipe.vg}
          />
        </div>
      </div>
      <div>
        <label>Nicotine</label>
        <div>
          <Field
            name="nicotine"
            component="input"
            type="number"
            placeholder={recipe == null ? 50 : recipe.nicotine}
          />
        </div>
      </div>
      <div>
        <label>Final amount</label>
        <div>
          <Field
            name="finalAmount"
            component="input"
            type="text"
            placeholder={recipe == null ? 110 : recipe.finalAmount}
          />
        </div>
      </div>

      <div>
        <label>Flavors</label>
        <div>
          <Field name="flavors" component="select" multiple={true}>
            {
              flavors.map((flavor) =>
                <option key={flavor.id} value={flavor.id}>{flavor.name}</option>
              )
            }
          </Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Save</button>
      </div>
    </form>
  );
};

export const RecipeFormComponent = reduxForm({
  form: "recipeForm"
})(RecipeForm);
