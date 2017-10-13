import { EventEmitter }  from 'events';
import dispatcher from '../dispatcher/app-dispatcher';

class PetStore extends EventEmitter {
  constructor() {
    super();
    this.lits           = null;
    this.filteredList   = null;
    this.currentFilter  = '';
    this.specialFilters = false;
    this.selectedPet    = '';
    this.currentPetId   = '';
    this.error          = null;
  }

  resetStore () {
    this.lits           = null;
    this.filteredList   = null;
    this.error          = null;
  }

  softReset() {
    this.filteredList   = null;
    this.specialFilters = false;
    this.emit('change');
  }

  setCurrentFilter(filterName) {
    this.currentFilter = filterName;
    this.emit('change');
  }

  findByFilter(text, filterTo) {
    let result = null;
    let counter = 0;
    
    if(filterTo == 'all') {
      filterTo = 'description';
    }

    if (text !== null) {
      
      result = this.list.filter( (item)=> {
        counter ++;
        if(counter > 20) return;
        return item[filterTo].indexOf(text) != -1;
      });

    } else {
      
      if(filterTo === "name" || filterTo === "description" || filterTo === "id" || filterTo === "all") {
        this.specialFilters = false;
        return;
      }

      this.specialFilters = true;
      result = this.list.filter( (item)=> {
        counter ++;
        if(counter > 20) return;
        return item.hasOwnProperty(filterTo) ? item[filterTo] : '';
      });
      
      console.log('only Category ', result);
    }

    this.filteredList = result;
    this.emit('change');
  }

  getFilterNames() {
    if(this.currentFilter) {
      let filterNames = this.filteredList.map((item) => {
        return item.category;
      });

      return filterNames;
    }
  }

  getPetById(id) {
    let pet = this.list.filter((item) => {
      return id === item.id ? item : ''
    });

    console.log('selected pet: ', pet);
    this.selectedPet = pet;
    return pet;
  }

  actions(action) {
   switch(action.type) {
    case "RECEIVED_PET_LIST":
        this.list = action.data;
        console.log('length:', this.list.length);
        this.emit('change');
      break;
    case "RECEIVED_FILTER":
        this.setCurrentFilter(action.filter);
        this.emit('change');
      break;
    case "RECEIVED_CURRENT_PET_ID":
        console.log('action current pet id: ', action.currentPetId);
        this.getPetById(action.currentPetId);
        this.emit('change');
      break;
    case "RESTORE_STORE":
        console.log('RRESTORED DATA: ', action.data);
        this.list = action.data.list;
        this.getPetById(action.data.currentPetId);
        this.emit('change');
      break;
    case "ERROR_RECEIVING_PET_LIST":
        console.log('there was an error getting pets data: ', action.error);
        this.error = action.error;
      break;
   }
  }
}

const petStore = new PetStore;
petStore.token = dispatcher.register(petStore.actions.bind(petStore));

export default petStore;