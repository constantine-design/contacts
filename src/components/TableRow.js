import React from 'react';
import SimpleButton from './SimpleButton.js'

export default function TableRow(props) {
  return (
    <tr style={{verticalAlign:"middle"}}>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td style={{width: "8rem",textAlign: "center"}}>
        <SimpleButton
          name="Edit"
          onClick={()=>props.writeForm(props.contact)}
        />
        <SimpleButton
          isRed
          name="🗙"
          onClick={()=>props.deleteContact(props.contact.id)}
        />
      </td>
    </tr>
  );
}
