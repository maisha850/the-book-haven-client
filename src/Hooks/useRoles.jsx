import React from 'react';

import { useQuery } from '@tanstack/react-query'
import useAuth from './UseAuth';
import useAxiosSecure from './UseAxiosSecure';

const useRoles = () => {
const{user, loading}=useAuth()
const axiosInstance = useAxiosSecure()
const{data:role , isLoading: roleLoading}=useQuery({
    enabled:!loading && !!user.email,
    queryKey:['role', user.email],
    queryFn:async()=>{
const {data}= await axiosInstance(`/users/role/${user.email}`)
return data.role
    }
})
return {role , roleLoading}
};

export default useRoles;