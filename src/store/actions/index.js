import { SET_CONTACTS, NEW_CONTACT } from "../reducers";
import api from "../../api.js";


export const setContacts = (payload) => ({type: SET_CONTACTS, payload});
export const createContact = (payload) => ({type: NEW_CONTACT, payload});

export const fetchContacts = () => {
  return (dispatch) => {
    api.get()
      .then(response => dispatch(setContacts(response.data)));
  }
}

export const newContact = (contact) => {
  return (dispatch) => {
    api.post("", contact)
      .then(response => dispatch(
        createContact(response.data)
      ))
  }
}
