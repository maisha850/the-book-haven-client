import axios from 'axios';
import React from 'react';
const instance = axios.create({
    baseURL: 'https://book-haven-server-one.vercel.app'
    
})
const useAxios = () => {
 return instance
};

export default useAxios;