import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import CreateUser from './CreateUser';
import UserTable from './UserTable';

const Dashboard = () => {
    const { users } = useContext(UserContext);

    return (
        <div style={{ padding: "20px" }}>
            <h1 className="mb-4 text-center">User Dashboard</h1>
            <CreateUser />
            <UserTable users={users} />
        </div>
    );
};

export default Dashboard;