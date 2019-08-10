const initalState = {
  customers: [
    {
      name: "John Doe",
      phone: "910928392098",
      address: "123 Sun Street",
      membership: "Platinum",
      id: 1,
    },
  ],
  loading: false,
  loaded: true,
};

export function customerReducer(state = initalState, action){
    switch(action.type){
        case "LOAD_CUSTOMER": {
            return {...state, loading: true, loaded: false,};
        }

        default: {
            return state;
        }
    }
}