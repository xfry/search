import React from 'react';
import SelectField  from './select-field';
import TextField    from './text-field';
import PetStore     from '../stores/pet-store';

import dispatcher   from '../dispatcher/app-dispatcher';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Id", "Name", "Category", "Type", "Description"],
      filteredData: [],
      filterNames: []
    }

    this.setFilteredData      = this.setFilteredData.bind(this);
    this.generateFilterNames  = this.generateFilterNames.bind(this);
  }

  _fieldChange(e) {
    let textValue         = e.nativeEvent.target.value.toLowerCase();
    let capitalize        = textValue.slice(0).charAt(0).toUpperCase();
    let textCapitalized   =  capitalize + textValue.slice(1);

    console.log("text capitalized ", textCapitalized);

    if(PetStore.currentFilter) {
      PetStore.findByFilter(textCapitalized, PetStore.currentFilter);
    } else {
      dispatcher.dispatch({type: 'RECEIVED_FILTER', filter: 'description'});
      PetStore.findByFilter(textCapitalized, PetStore.currentFilter);
    }
  }

  _onChange(e) {
    let filterValue = e.nativeEvent.target.value.toLowerCase();
    dispatcher.dispatch({type: 'RECEIVED_FILTER', filter: filterValue});
    PetStore.softReset();
    PetStore.findByFilter(null, PetStore.currentFilter);
  }

  _onChangeFilter(e) {
    let textValue         = e.nativeEvent.target.value;

    console.log('filter Change: ', textValue);
    if(PetStore.currentFilter) {
      PetStore.findByFilter(textValue, PetStore.currentFilter);
    }
  }

  setFilteredData() {
    this.setState({
      filteredData: PetStore.filteredList,
    }, () => {
      console.log('filtered data: ', this.state.filteredData);
    });
  }

  generateFilterNames() {
    if(PetStore.specialFilters) {
      return PetStore.getFilterNames();
    } else {
      return [];
    }
  }

  componentWillMount() {
    PetStore.on('change', this.setFilteredData);
  }

  componentWillUnmount() {
    PetStore.removeListener('change', this.setFilteredData); 
  }

  render() {
    return (
      <form action="" className="home__search-form" ref="searchForm">
        <div className="form__field">
          <TextField 
            description="Find pet"
            onChange={this._fieldChange.bind(this)}/>
          
          <SelectField 
            options={this.state.options} 
            onChange={this._onChange.bind(this)}/>
        </div>
        {
          this.state.filteredData && PetStore.specialFilters === true ? 
          <div className="from__filter-field">
            <SelectField 
              options={this.generateFilterNames()}
              onChange={this._onChangeFilter.bind(this)}
              />
          </div> :
          ""
        }
      </form>
    )
  }
}

export default Search;