import React    from 'react';
import PetStore    from '../stores/pet-store';
import { Link, hashHistory } from 'react-router';
import * as homeActions from '../actions/home-actions';
import utils    from '../utils/utils';
import Request    from '../utils/xhr';
import PetCard  from './pet-card';

import dispatcher from '../dispatcher/app-dispatcher';

class PetInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPet: null
    }

    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    if(!PetStore.list) {
      this.getJsonData();
    }

    PetStore.on('change', this.updateState);
  }

  getJsonData() {
    if(localStorage.getItem('list')) {
      let currentPetId = this.props.params.id;
      let data = {
        list: JSON.parse(localStorage.getItem('list')),
        currentPetId: currentPetId
      }

      dispatcher.dispatch({type: 'RESTORE_STORE', data: data});
    }
  }

  updateState() {
    this.setState({
      currentPet: PetStore.selectedPet
    });
  }

  selectPet() {
    dispatcher.dispatch({type: 'RECEIVED_CURRENT_PET_ID', currentPetId: this.props.params.id});
  }

  componentDidMount() {
    this.selectPet();
  }

  componentWillUnmount() {
    PetStore.removeListener('change', this.updateState);
    PetStore.softReset();
  }

  render() {
    console.log('current pet: ', this.state.currentPet);
    return (
      <section 
        className="home__pet-container"
        ref={this.props.id} >
          <div className="pet-info">
            {
              this.state.currentPet &&
              <PetCard  item={this.state.currentPet[0]} 
                        parentName={'pet-container'}
                        cutString={false}/>
            }
            <Link to="/">
              <span>Go Back</span>
            </Link>
          </div>
      </section>
    )
  }
}

export default PetInfo;