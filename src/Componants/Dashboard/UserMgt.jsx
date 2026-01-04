


import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const UserMgt = () => {
    const instance = useAxiosSecure();
    const [searchText, setSearchText] = useState('');

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await instance.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    });

    // Make Admin
    // const handleMakeAdmin = async (user) => {
    //     const roleInfo = { role: 'admin' };
    //     const res = await instance.patch(`/users/role/${user._id}`, roleInfo);
    //     if (res.data.modifiedCount) {
    //         refetch();
    //         Swal.fire({ text: `${user.displayName} is now an Admin`, icon: 'success' });
    //     }
    // };

   const handleToggleRole = async (user) => {
  const newRole = user.role === "admin" ? "user" : "admin";

  const result = await Swal.fire({
    title: "Are you sure?",
    text:
      newRole === "admin"
        ? `Make ${user.displayName} an Admin?`
        : `Remove Admin access from ${user.displayName}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2563eb",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes",
  });

  if (!result.isConfirmed) return;

  try {
    const res = await instance.patch(`/users/role/${user._id}`, {
      role: newRole,
    });

    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        icon: "success",
        text:
          newRole === "admin"
            ? `${user.displayName} is now an Admin`
            : `${user.displayName} is now a User`,
        timer: 1800,
        showConfirmButton: false,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: `${error.message}`,
      text: "Role update failed",
    });
  }
};


    return (
        <div>
            <h3 className='text-3xl font-bold mb-4'>Manage Users: {users.length}</h3>

            {/* Search */}
            <label className="input my-5 flex items-center gap-2">
                <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    className="grow p-2 border border-gray-300 rounded"
                    placeholder="Search by name or email"
                />
            </label>

            {/* Users Table */}
            <div className="overflow-x-auto md:text-[16px] text-xs">
                <table className="table md:w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className='mask mask-squircle h-12 w-12'>
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.isFraud ? (
                                        <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">Fraud</span>
                                    ) : (
                                        <span className="px-2 py-1  text-gray-500 rounded ">{user.role}</span>
                                    )}
                                </td>
                                <td className='md:flex space-y-4 gap-2'>
                                    {/* <button onClick={() => handleMakeAdmin(user)} className='btn md:btn-xs btn-warning'>Make Admin</button> */}
                                    <button
  onClick={() => handleToggleRole(user)}
  className={`btn md:btn-xs ${
    user.role === "admin" ? "btn-error" : "btn-warning"
  }`}
>
  {user.role === "admin" ? "Remove Admin" : "Make Admin"}
</button>

                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserMgt;
