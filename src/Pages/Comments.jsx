// import React, { useEffect, useState } from 'react';
// import useAxios from '../Hooks/UseAxios';


// const Comments = ({id}) => {
//       console.log(id)

//      const axiosSec = useAxios()
//     const [books, setBooks]=useState([])
    
//     useEffect(()=>{
//         axiosSec.get(`/comments/${id}`)
//         .then(data => {
//             console.log('after post' , data.data)
//             setBooks(data.data)
              
//         })
//     },[axiosSec,id])


//     return (
//         <div>
//             {
//                 books.map(comment=><div className='mt-4'>
//                     <img className='w-8 h-8 rounded-full' src={comment.photo || 'https://tse1.mm.bing.net/th/id/OIP.vmoycMUOmbcs0Vw-1iIdVAHaHa?pid=Api&P=0&h=220'} alt="" />
//                     <h3 className='text-lg font-semibold'>{comment.name}</h3>
//                     <p className=''>{comment.comment}</p>
//                     <p className='text-xs'>{comment.time}</p>
//                 </div>)
//             }
            
//         </div>
//     );
// };

// export default Comments;


import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import useAxios from "../Hooks/UseAxios";

const Comments = ({ id, refresh }) => {
  
  const axiosSec = useAxios();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    axiosSec
      .get(`/comments/${id}`)
      .then((res) => setComments(res.data || []))
      .catch((err) => console.error("Error fetching comments:", err))
      .finally(() => setLoading(false));
  }, [axiosSec, id, refresh]);

  if (loading) return <p className="text-gray-500">Loading comments...</p>;

  return (
    <div className="space-y-4 mt-4">
      {comments.length === 0 ? (
        <p className="text-gray-500 italic">No comments yet.</p>
      ) : (
        comments.map((comment, index) => {
          const timeAgo = comment.time
            ? formatDistanceToNow(new Date(comment.time), { addSuffix: true })
            : "just now";

          return (
            <div
              key={comment._id || index}
              className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg shadow-sm"
            >
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={
                  comment.photo ||
                  "https://tse1.mm.bing.net/th/id/OIP.vmoycMUOmbcs0Vw-1iIdVAHaHa?pid=Api&P=0&h=220"
                }
                alt={comment.name}
              />
              <div>
                <h3 className="font-semibold">{comment.name}</h3>
                <p className="text-sm text-gray-700">{comment.comment}</p>
                <p className="text-xs text-gray-400">{timeAgo}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
