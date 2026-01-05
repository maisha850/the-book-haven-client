import React from 'react';


import useRoles from '../../Hooks/useRoles';

import AdminDashboard from './AdminDashboard';
import UserMgts from './UserMgts';
import UserDash from './UserDash';

const DashHome = () => {
    const {role}=useRoles()
    return (
        <div>
            {role === 'admin' && <AdminDashboard></AdminDashboard>}
            {role === 'user' && <UserDash></UserDash> }
           
            
        </div>
    );
};

export default DashHome;