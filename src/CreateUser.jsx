import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const CreateUser = () => {
    const { addUser } = useContext(UserContext);
    const [formData,  setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: { name: '', catchPhrase: '', bs: '' },
        username: '',
        website: '',
        address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === 'company'){
            setFormData((prev) => ({
                ...prev,
                company: { ...prev.company, name: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name){
            alert("Please enter a name");
            return;
        }
        addUser(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: { name: '' }
        });
    };

    return (
        <div className="container mt-4">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label" >Name</label>
                        <input className="form-control"
                            name="name"
                            type="text"
                            placeholder="Enter full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label" >Email</label>
                        <input className="form-control"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label" >Phone</label>
                        <input className="form-control"
                            name="phone"
                            type="tel"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label" >Company</label>
                        <input className="form-control"
                            name="company"
                            type="text"
                            placeholder="Enter company name"
                            value={formData.company.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4">Add User</button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;