export const SET_CONTACTS = "SET_CONTACTS";
export const NEW_CONTACT = "NEW_CONTACT";

const initialState = {
  contacts: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(SET_CONTACTS):
      return { ...state, contacts: payload };
    case(NEW_CONTACT):
      return { ...state, contacts: payload };
    default:
      return state;
  }
}

export default reducer;
