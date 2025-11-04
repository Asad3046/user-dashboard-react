import React, { createContext, useState, useEffect } from 'react';

// Create User Context
const UserContext = createContext ();

// Provider Component
const UserProvider = ({ children}) => {
    const [users, setUsers] = useState([]);

    //Fetch initial users (from API)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    //Add new user (client side only)
    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
    };

    return (
        <UserContext.Provider value={{ users, addUser }}>
            { children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };