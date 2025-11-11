import React from 'react';
import useAuth from '../Hooks/UseAuth';


import useAxios from '../Hooks/UseAxios';
import Swal from 'sweetalert2';

const AddBooks = () => {
  const {user} = useAuth()
  const instance = useAxios()
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
  userName : user?.displayName

}
instance.post('/books', newBooks)
.then(data=>{
  console.log('After post ' , data.data)
   if(data.data.insertedId){
                Swal.fire({
                 position: "top-center",
                 icon: "success",
                 title: "Your book has been added",
                 showConfirmButton: false,
                 timer: 1500
               });
            }


})


  }
    return (
         <div>
         
                  <h1 className="text-5xl font-bold text-center my-10 ">Add A Book</h1>
             <div className="card  md:w-150 shrink-0 shadow-2xl mx-auto">
      <div className="card-body bg-form rounded-2xl ">
       <form onSubmit={handleAddBooks}>

         <fieldset className="fieldset ">
          <label className="label text-xl ">Title</label>
          <input type="text" name='title' className="input rounded-full  focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Title" />
          <label className="label text-xl ">Author</label>
          <input type="text" name='author' className="input    rounded-full  focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Author" />
             <select name='category' className='select w-full rounded-full focus:border-0 focus:ring-amber-500 '>
          <option value="disabled">Select Genre</option>
          <option value="Vehicles">Fantasy</option>
          <option value="Plants">Science Fiction (Sci-Fi)</option>
          <option value="Food">Mystery</option>
           <option value="Home & Living">Romance</option>
              <option value="Characters">Horrors</option>
         </select>
           <label className="label text-xl ">Rating</label>
          <input type="text" name='rating' className="input    rounded-full  focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Rating" />

          <label className="label text-xl ">Summary</label>
     <textarea name="summary" id="" className='textarea w-full focus:outline-none focus:ring-2 focus:ring-amber-500 ' placeholder='Summary'>


     </textarea>
      <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-purple-200"
              placeholder="https://example.com/image.jpg"
            />
         
          <button className="w-full py-3 text-xl  text-slate-50 btn-active btn-primary  mt-4">Add</button>
          
 
          

        </fieldset>
       
       </form>
       
 
      </div>
    </div>
        </div>
    );
};

export default AddBooks;