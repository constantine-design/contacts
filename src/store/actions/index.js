import { SET_CONTACTS, NEW_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../reducers/contacts";
import { WRITE_FORM, CLEAN_FORM } from "../reducers/form";
import api from "../../api.js";


// actions form
// -----------------------
export const writeForm = (payload) => ({type: WRITE_FORM, payload});
export const cleanForm = (payload) => ({type: CLEAN_FORM, payload});


// actions contacts
// -----------------------
const actionsetContacts = (payload) => ({type: SET_CONTACTS, payload});
export const fetchContacts = () => {
  return (dispatch) => {
    api.get()
      .then(
        response => dispatch(actionsetContacts(response.data))
      );
  }
}

const actionNewContact = (payload) => ({type: NEW_CONTACT, payload});
export const newContact = (contact) => {
  return (dispatch) => {
    api.post("", contact)
      .then(
        response => dispatch(actionNewContact(response.data))
      );
  }
}

const actionDeleteContact = (payload) => ({type: DELETE_CONTACT, payload});
export const deleteContact = (id) => {
  return (dispatch) => {
    api.delete(`/${id}`)
      .then(
        response => dispatch(actionDeleteContact(id))
      );
  }
}

const actionUpdateContact = (payload) => ({type: UPDATE_CONTACT, payload});
export const updateContact = (contact) => {
  return (dispatch) => {
    api.put(`/${contact.id}`, contact )
      .then(
        response => dispatch(actionUpdateContact(contact))
      );
  }
}
