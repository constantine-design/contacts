import { SET_CONTACTS } from "../reducers";
import api from "../../api.js";


export const setContacts = (payload) => ({type: SET_CONTACTS, payload});

export const fetchContacts = () => {
    return (dispatch) => {
        api.get()
          .then(response => dispatch(setContacts(response.data)));
    }
}
