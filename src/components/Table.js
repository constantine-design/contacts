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
            { props.contacts.map(contacts=>
              <tr key={contacts.id}>
                <td>{contacts.name}</td>
                <td>{contacts.phone}</td>
                <td>{contacts.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                  >
                    ✎
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
