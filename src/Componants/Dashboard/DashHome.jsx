import React from 'react';


import useRoles from '../../Hooks/useRoles';

import AdminDashboard from './AdminDashboard';
import UserMgts from './UserMgts';

const DashHome = () => {
    const {role}=useRoles()
    return (
        <div>
            {role === 'admin' && <AdminDashboard></AdminDashboard>}
            {role === 'user' && <UserMgts></UserMgts> }
           
            
        </div>
    );
};

export default DashHome;