import dispatcher from '../dispatcher/app-dispatcher';

export const dispatchPetList = (res) => {
  if(!res.error) {
    dispatcher.dispatch({type: "RECEIVED_PET_LIST", data: JSON.parse(res)});
  } else {
    dispatcher.dispatch({type: "ERROR_RECEIVING_PET_LIST", error: JSON.parse(res.error)});
  }
};