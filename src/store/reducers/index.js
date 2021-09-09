export const SET_CONTACTS = "SET_CONTACTS";
export const NEW_CONTACT = "NEW_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

const initialState = {
  contacts: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(SET_CONTACTS):
      return { ...state,
        contacts: payload
      };
    case(NEW_CONTACT):
      return { ...state,
        contacts: [ ...state.contacts, payload ]
      };
    case(DELETE_CONTACT):
      return { ...state,
        contacts: state.contacts.filter(contact=>contact.id!==payload)
      };
    case(UPDATE_CONTACT):
      return { ...state,
        contacts: state.contacts.map(contact=>
          contact.id===payload.id ?
          payload :
          contact
        ) };
    default:
      return state;
  }
}

export default reducer;
