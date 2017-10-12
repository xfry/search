import { EventEmitter }  from 'events';
import dispatcher from '../dispatcher/app-dispatcher';

class PetStore extends EventEmitter {
  constructor() {
    super();
    this.lits = null;
    this.error = null;
  }

  resetStore () {
    this.lits = null;
  }

  actions(action) {
   switch(action.type) {
    case "RECEIVED_PET_LIST":
        this.list = action.data;
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