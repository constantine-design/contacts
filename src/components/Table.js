import React from 'react';
import SimpleButton from './SimpleButton.js'

export default function Table(props) {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped" style={{fontSize:"0.7rem"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { props.contacts.map(contact=>
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <SimpleButton
                    name="Edit"
                    onClick={()=>props.writeForm(contact)}
                  />
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={()=>props.deleteContact(contact.id)}
                  >
                    🗙
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <SimpleButton
          name="Add 🞡"
          onClick={()=>props.writeForm({"name":"","phone":"","email":""})}
        />
      </div>
    </>
  )
}
