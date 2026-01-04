import React from 'react';
import useRoles from '../../Hooks/useRoles';
import AdminDash from './Admin/AdminDash';
import UserDash from './UserDash';

const DashHome = () => {
    const {role}=useRoles()
    return (
        <div>
            {role === 'admin' && <AdminDash></AdminDash>}
            {role === 'user' && <UserDash></UserDash>}
            
        </div>
    );
};

export default DashHome;