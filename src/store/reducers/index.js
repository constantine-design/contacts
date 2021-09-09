import { combineReducers } from "redux";
import form from "./form.js";
import contacts from "./contacts.js";

export default combineReducers({ contacts, form});
