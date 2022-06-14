import React from 'react'

const UserTable = (props) => {

console.log(props.users);

return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            props.users.length > 0 ? //es un if que da un mensaje si el array esta vacio
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button 
                            className="button muted-button"
                            onClick={
                                () => {props.editRow(user)}
                            }
                        >
                            Edit
                        </button>
                        <button 
                            className="button muted-button"
                            onClick={() => {props.deleteUser(user.id)}}
                        >
                        Delete
                        </button>
                    </td>
                </tr>
            )) : ( // esto es el else
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }
      </tbody>
    </table>
  )
};
  
  export default UserTable