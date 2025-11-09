import axios from 'axios';
import React, {  useEffect } from 'react';
import useAuth from './UseAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const useAxiosSecure = () => {
    const {user ,logOut} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        const requestInceptors = instance.interceptors.request.use((config)=>{
            console.log(config)
            config.headers.Authorization = `Bearer ${user.accessToken} `
            return config
        })

        const responseInceptors = instance.interceptors.request.use(res=>{
return res
        }, err=>{
            const status = err.status;
            if(status === 401 || status === 403){
logOut()
.then(()=>{
navigate('/register')
})

            }

        })
        return ()=>{
            instance.interceptors.request.eject(requestInceptors)
            instance.interceptors.request.eject(responseInceptors)
        }

    },[user , logOut , navigate])
 return instance

};

export default useAxiosSecure;