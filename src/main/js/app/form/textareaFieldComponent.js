import React from 'react';

class TextareaField extends React.Component {
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
        <textarea
          className='form-control'
          type={ this.props.type }
          value={ this.props.value }
          placeholder={ this.props.placeholder }
          onChange={ this.handleChange }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
        />
        { this.props.error && <span className='help-block'>{ this.props.error }</span> }
      </div>
    );
  }
}

export default TextareaField;
