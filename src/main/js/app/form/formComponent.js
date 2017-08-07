import React from 'react';

import Field from './fieldComponent';

const Form = ({ fieldList, handleOnClickSave }) => (
  <div className='form container'>
    <form method='post'>
      {
        fieldList.map(field => (
          <Field
            key={ field.name }
            type={ field.type }
            name={ field.name }
            data={ field.data }
            component={ field.component }
            placeholder={ field.placeholder }
            label={ field.label }
          />

        ))
      }
      <button
        type='button'
        className='btn btn-default'
        onClick={ handleOnClickSave }
      >
        Save
      </button>
    </form>
  </div>
);

export default Form;
