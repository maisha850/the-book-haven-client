import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/UseAxios';


const Comments = ({id}) => {
      console.log(id)

     const axiosSec = useAxios()
    const [books, setBooks]=useState([])
    
    useEffect(()=>{
        axiosSec.get(`/comments/${id}`)
        .then(data => {
            console.log('after post' , data.data)
            setBooks(data.data)
              
        })
    },[axiosSec,id])


    return (
        <div>
            {
                books.map(comment=><div>
                    <img className='w-8 h-8 rounded-full' src={comment.photo || 'https://tse1.mm.bing.net/th/id/OIP.vmoycMUOmbcs0Vw-1iIdVAHaHa?pid=Api&P=0&h=220'} alt="" />
                    <h3>{comment.name}</h3>
                    <p>{comment.comment}</p>
                    <p>{comment.time}</p>
                </div>)
            }
            
        </div>
    );
};

export default Comments;