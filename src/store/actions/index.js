import { SET_CONTACTS, NEW_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../reducers";
import api from "../../api.js";


const actionsetContacts = (payload) => ({type: SET_CONTACTS, payload});
const actionNewContact = (payload) => ({type: NEW_CONTACT, payload});
const actionDeleteContact = (payload) => ({type: DELETE_CONTACT, payload});
const actionUpdateContact = (payload) => ({type: UPDATE_CONTACT, payload});

export const fetchContacts = () => {
  return (dispatch) => {
    api.get()
      .then(
        response =>
          dispatch(actionsetContacts(response.data))
      );
  }
}
export const newContact = (contact) => {
  return (dispatch) => {
    api.post("", contact)
      .then(
        response =>
          dispatch(actionNewContact(response.data))
      );
  }
}
export const deleteContact = (id) => {
  return (dispatch) => {
    api.delete(`/${id}`)
      .then(
        response =>
          dispatch(actionDeleteContact(id))
      );
  }
}
export const updateContact = (contact) => {
  return (dispatch) => {
    api.put(`/${contact.id}`, contact )
      .then(
        response =>
          dispatch(actionUpdateContact(contact))
      );
  }
}
