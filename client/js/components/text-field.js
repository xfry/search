import React from 'react';

class TextField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <input
          className="text-field"
          id={this.props.id}
          placeholder={this.props.description} 
          name={this.props.name} 
          type="text"
          onChange={this.props.onChange}>
        </input>
    )
  }
}

export default TextField;