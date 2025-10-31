import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import CreateUser from './CreateUser';
import UserTable from './UserTable';

const Dashboard = () => {
    const { users } = useContext(UserContext);

    return (
        <div className="container py-4">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-primary">User Dashboard</h1>
                <p className="text-muted">Manage your users efficiently</p>
            </div>

            {/* Create User Form */}
            <div className="mb-5">
                <CreateUser />
            </div>

            {/* User List */}
            <div>
                <UserTable users={users} />
            </div>
        </div>
    );
};

export default Dashboard;