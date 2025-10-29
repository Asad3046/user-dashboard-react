import React from 'react'

const UserTable = ({ users }) => {
  return (
    <div>
        <h2>User List</h2>
        <table border="1" cellpadding="10" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.company.name}</td>
                    </tr>
                ))
                ) : (
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>
                            No users available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable;