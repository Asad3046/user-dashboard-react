import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { users } = useContext(UserContext);

    // Find the selected user by ID
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return (
            <div className="container mt-4 text-center">
                <h2>User not found</h2>
                <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>Back to Dashboard</button>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {/* Back Button */}
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}> &larr; Back</button>

            <div className="card shadow p-4">
                <h2 className="text-primary mb-4">{user.name}</h2>

                <div className="row">
                    <div className="col-md-6">
                        <h4>Basic Information</h4>
                        <p> <strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                    </div>

                    <div className="col-md-6">
                        <h4>Company</h4>
                        <p><strong>Name: </strong> {user.company?.name}</p>
                        <p><strong>Catch Phrase: </strong> {user.company?.catchPhrase}</p>
                        <p><strong>BS: </strong> {user.company?.bs}</p>
                    </div>
                </div>

                <hr />

                <h4>Address</h4>
                <p><strong>Street:</strong> {user.address?.street}</p>
                <p><strong>Suite:</strong> {user.address?.suite}</p>
                <p><strong>City:</strong> {user.address?.city}</p>
                <p><strong>Zipcode:</strong> {user.address?.zipcode}</p>

                <h5 className="mt-3"><strong>Geo Location</strong></h5>
                <p><strong>Latitude:</strong> {user.address?.geo?.lat}</p>
                <p><strong>Longitude:</strong> {user.address?.geo?.lng}</p>
            </div>
        </div>
    );
};

export default UserDetails;