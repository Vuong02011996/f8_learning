import React, { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';

export default function UserInformation() {
    const { userData } = useContext(AppContext);
    return (
        <>
            <h5>User Information</h5>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Email: {userData.email}</p>
        </>
    );
}
