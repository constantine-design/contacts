import React from 'react';

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
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={()=>props.updateContact({...contact, "name": "Y"})}
                  >
                    ✎
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
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
      <div className="text-right">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={()=>props.newContact({"name":"X","phone":"345345","email":"mail"})}
        >
          Add 🞡
        </button>
      </div>
    </>
  )
}
