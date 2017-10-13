import React    from 'react';
import Request  from '../utils/xhr.js';
import PetStore from '../stores/pet-store';
import * as homeActions from '../actions/home-actions';

import SearchForm from './search-form';
import PetList    from './pet-list';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: null,
    }

    this._populateSte = this._populateSte.bind(this);
  }

  getJsonData() {
    let options = {
      url: 'dog-list.json',
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }

    /**
     * [A previous promise was resolve and then you can get the result]
     * @param  {[options]} data [a set of plain text]
     * @return {[promise]}
     */
    Request.xhr(options)
      .then(response => {
        homeActions.dispatchPetList(response);
      });
  }

  _populateSte() {
    this.setState({
      petList: PetStore.list,
      filteredList: PetStore.filteredList
    }, () => {
      //console.log('the state has change: ', this.state.petList);
      localStorage.setItem('list', JSON.stringify(PetStore.list));
    });
  }

  componentWillMount() {
    PetStore.on('change', this._populateSte);
  }

  componentWillUnmount() {
    PetStore.removeListener('change', this._populateSte);
  }

  componentDidMount() {
    this.getJsonData();
  }

  render() {
    return (
      <section className="home" ref="home">
        <SearchForm />
        {
          this.state.filteredList &&
          <PetList list={this.state.filteredList}/>
        }
      </section>
    )
  }
}

export default Home;