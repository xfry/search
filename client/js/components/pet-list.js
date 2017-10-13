import React    from 'react';
import { Link, hashHistory } from 'react-router';
import dispatcher from '../dispatcher/app-dispatcher';
import utils      from '../utils/utils';
import PetCard    from './pet-card';

class PetList extends React.Component {
  constructor(props) {
    super(props);
  }

  generateCards(data) {
    let options = [];
    data.forEach((item, index) => {
      options.push(
        <Link to={`${'details/'+item.id}`}
              key={`${index+item.id}`}
              ref={`${index+item.id}`} >
          <PetCard  item={item} 
                    parentName={'pet-container'}
                    cutString={true} />
        </Link> 
      )
    });

    console.log('options', options);
    return options;
  }

  render() {
    return (
      <section 
        className="home__pet-container"
        ref={this.props.id}
        onChange={this.props.onChange} >
          {
            this.generateCards(this.props.list)
          }

      </section>
    )
  }
}

export default PetList;