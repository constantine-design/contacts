import React, { useEffect } from 'react';
import './App.css';
import Contacts from './pages/Contacts.js'

export default function App(props) {
  return (
    <div className="App container py-5">
      <Contacts />
    </div>
  );
}
