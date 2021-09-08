export const SET_CONTACTS = "SET_CONTACTS";

const initialState = {
  contacts: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(SET_CONTACTS):
      return { ...state, contacts: payload };
    default:
      return state;
  }
}

export default reducer;
