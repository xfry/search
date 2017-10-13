import React from 'react';

class SelectField extends React.Component {
  constructor(props) {
    super(props);
  }

  generateOptions(data) {
    let options = [];
    data.forEach((item, index) => {
      options.push(
        <option key={`${index+item}`} id={`${index+item}`} name={`${index+item}`} value={`${item}`} >{`${item}`}</option>
      )
    });

    console.log('options', options);
    return options;
  }

  render() {
    return (
      <select 
        className="select-field"
        ref={this.props.id}
        onChange={this.props.onChange} >

          <option defaultValue="all" >All</option>
          {
            this.generateOptions(this.props.options)
          }

      </select>
    )
  }
}

export default SelectField;