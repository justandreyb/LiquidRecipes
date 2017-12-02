import React from 'react';

class SelectBoxField extends React.Component {
  componentDidMount() {
    this.props.fieldActions.registerField();
  }

  handleChange = (e) => {
    this.props.fieldActions.changeField(this.props.name, e.target.value);
  };

  handleFocus = () => {
    this.props.fieldActions.getFocusOnField();
  }

  handleBlur = () => {
    this.props.fieldActions.blurFocusOnField();
  };

  render() {
    return (
      <div className='form-group'>
        <label className='control-label' htmlFor={ this.props.name }>{ this.props.label }</label>
        <select
          className='form-control'
          type={ this.props.type }
          value={ this.props.value }
          placeholder={ this.props.placeholder }
          onChange={ this.handleChange }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          disabled={ this.props.disabled }
        >
          <option key='emptySelect' value=''>Select { this.props.label.toLowerCase() }</option>
          { (this.props.list !== null && this.props.list.length > 0) ? (
            this.props.list.map(element => {
              return this.props.optionRender(element);
            })
          ) : (
            ''
          )}
        </select>

        { this.props.error && <span className='help-block'>{ this.props.error }</span> }
      </div>
    );
  }
}

export default SelectBoxField;
