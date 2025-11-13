import React, { useState } from 'react';
import useAuth from '../Hooks/UseAuth';

import { useNavigate } from 'react-router';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import toast from 'react-hot-toast';

const AddBooks = () => {
  const {user} = useAuth()
  const instance = useAxiosSecure()
  const navigate = useNavigate()
  const[loading, setLoading]=useState(true)
  const handleAddBooks=(e)=>{
    e.preventDefault()
    const title = e.target.title.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const thumbnail = e.target.thumbnail.value;
const newBooks = {
  title : title ,
  author : author,
  genre :category,
  rating : rating,
  summary : summary,
  coverImage : thumbnail,
  userEmail: user.email,
  userName : user?.displayName,
  created_at : new Date()

}
instance.post('/books', newBooks)
.then(data=>{
  console.log('After post ' , data.data)
   if(data.data.insertedId){
              toast.success('Your book has been added')
            }

            navigate('/all-books')
            setLoading(false)


})
if(loading){
      return <span className='loading loading-dots loading-xl mx-auto '></span>
    }
    

  }
    return (
         <div className='w-11/12 mx-auto pb-15'>
         
                  <h1 className="text-5xl font-bold text-center my-10 ">Add A Book</h1>
             <div className="card  md:w-150 shrink-0 shadow-2xl mx-auto">
      <div className="card-body bg-form rounded-2xl ">
       <form onSubmit={handleAddBooks}>

         <fieldset className="fieldset ">
          <label className="label text-lg text-secondary font-medium ">Title</label>
          <input type="text" name='title' className="input rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Title" />
          <label className="label text-lg text-secondary font-medium ">Author</label>
          <input type="text" name='author' className="input    rounded-full bg-white text-gray-800  focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Author" />
             <select name='category' className='select w-full rounded-full bg-white text-gray-800 focus:border-0 focus:ring-amber-500 '>
          <option value="disabled">Select Genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
          <option value="Mystery">Mystery</option>
           <option value="Romance">Romance</option>
              <option value="Horrors">Horrors</option>
         </select>
           <label className="label text-lg text-secondary font-medium ">Rating</label>
          <input type="text" name='rating' className="input    rounded-full bg-white text-gray-800  focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Rating" />

          <label className="label text-lg text-secondary font-medium ">Summary</label>
     <textarea name="summary" id="" className='textarea w-full  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 ' placeholder='Summary'>


     </textarea>
      <label className="label text-lg text-secondary font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              required
              className="input w-full rounded-full bg-white text-gray-800 focus:border-0 focus:outline-purple-200"
              placeholder="https://example.com/image.jpg"
            />
         
          <button className="w-full py-3text-xl   text-slate-50 btn-active btn-primary  mt-4">Add</button>
          
 
          

        </fieldset>
       
       </form>
       
 
      </div>
    </div>
        </div>
    );
};

export default AddBooks;