import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>
            {loading ? <p>Loading users...</p> : <UserTable users={users} />}
        </div>
    );
};

export default Dashboard;