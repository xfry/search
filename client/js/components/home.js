import React    from 'react';
import Request  from '../utils/xhr.js';
import PetStore from '../stores/pet-store';
import * as homeActions from '../actions/home-actions';

import SearchForm from './search-form';
import Header     from './header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: null,
    }

    this.populateSte = this.populateSte.bind(this);
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

  populateSte() {
    this.setState({
      petList: PetStore.list
    }, () => {
      //console.log('the state has change: ', this.state.petList);
    });
  }

  componentWillMount() {
    PetStore.on('change', this.populateSte);
  }

  componentWillunmount() {
    PetStore.removeListener('change', this.populateSte);
  }

  componentDidMount() {
    this.getJsonData();
  }

  render() {
    return (
      <section className="home" ref="home">
        <Header />
        <SearchForm />
      </section>
    )
  }
}

export default Home;