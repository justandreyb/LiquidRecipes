import React from 'react';
import { Link } from 'react-router';

class ListField extends React.Component {
  componentDidMount() {
    this.props.fieldActions.registerField();
  }

  render() {
    return (
      <div className='form-group'>
        <label className='control-label' htmlFor={ this.props.name }>{ this.props.label }</label>
        <div
          className='list-group'
        >
          <Link
            to={ this.props.createNewEntityPath }
            key='createOneMoreTask'
            className='list-group-item list-group-item-action active'
          >
            <div className='d-flex justify-content-between'>
              <h5 className='mb-1'>Create new one</h5>
            </div>
          </Link>
          { (this.props.list !== null && this.props.list.length > 0) ? (
            this.props.list.map(element => {
              return this.props.liRender(element);
            })
          ) : (
            ''
          )}
        </div>

        { this.props.error && <span className='help-block'>{ this.props.error }</span> }
      </div>
    );
  }
}

export default ListField;
