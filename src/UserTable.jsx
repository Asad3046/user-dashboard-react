import React, { useState } from 'react'

const UserTable = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter users by name
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="container mt-4">
        <h2 className="mb-4 text-center">User List</h2>

        {/* Search Bar */}
        <div className="row mb-4">
            <div className="col-md-6 mx-auto">
                <input className="form-control"
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* User Cards */}
        {filteredUsers.length === 0 ? (
            <div className="text-center mt-5">
                <p className="text-muted">No users found.</p>
            </div>
        ) : (
            <div className="row">
                {filteredUsers.map((user) => (
                    <div className="col-md-4 mb-4" key={user.id}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{user.name}</h5>
                                <p className="card-text mb-1">
                                    <strong>ID:</strong> {user.id}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Email:</strong> {user.email || "-"}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Phone:</strong> {user.phone || "-"}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Company:</strong> {user.company.name || "-"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};

export default UserTable;