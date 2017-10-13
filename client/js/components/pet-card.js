import React    from 'react';
import { Link } from 'react-router';
import utils    from '../utils/utils';

class PetCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  className={`${this.props.parentName}__card scale-box`}
            id={`${this.props.item.id}`} 
            name={`${this.props.item.name}`} 
            value={`${this.props.item.name}`}>

            <img  className={`${this.props.parentName}__img`}
                  src={this.props.item.picture} />
            <h2 className={`${this.props.parentName}__title`}>
              {this.props.item.name}
            </h2>
            <span className={`${this.props.parentName}__category`}>
              {this.props.item.category}
            </span>
            <span className={`${this.props.parentName}__type`}>
              {this.props.item.type}
            </span>
            <p className={`${this.props.parentName}__description`}>
              {
                this.props.cutString ? 
                utils.cutString(this.props.item.description, 0, 142) :
                this.props.item.description
              }
            </p>
      </div>
    );
  }
}

export default PetCard;