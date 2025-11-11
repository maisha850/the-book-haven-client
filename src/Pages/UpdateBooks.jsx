
import { useLoaderData} from 'react-router';


import useAuth from '../Hooks/UseAuth';

import useAxiosSecure from '../Hooks/UseAxiosSecure';

const UpdateBooks = () => {

  const {user} = useAuth()
const book = useLoaderData()
console.log(book)
const instance = useAxiosSecure()

console.log(book)
  const handleUpdateBooks=(e)=>{
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
instance.put(`/books/${book._id}`,newBooks)
.then(data =>{
  console.log('after put' , data.data)
})
 
  }
  
 
    return (
          <div>
         
                  <h1 className="text-5xl font-bold text-center my-10 ">Update the Book</h1>
             <div className="card  md:w-150 shrink-0 shadow-2xl mx-auto">
      <div className="card-body bg-form rounded-2xl ">
       <form onSubmit={handleUpdateBooks}>

         <fieldset className="fieldset ">
          <label className="label text-lg text-secondary font-medium ">Title</label>
          <input defaultValue={book.title} type="text" name='title' className="input rounded-full  focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-500 w-full" placeholder="Title" />
          <label className="label text-lg text-secondary font-medium ">Author</label>
          <input defaultValue={book.author} type="text" name='author' className="input    rounded-full  focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-500 w-full" placeholder="Author" />
             <select defaultValue={book.category} name='category' className='select bg-white text-gray-500 w-full rounded-full focus:border-0 focus:ring-amber-500 '>
          <option value="disabled">Select Genre</option>
          <option value="Vehicles">Fantasy</option>
          <option value="Plants">Science Fiction (Sci-Fi)</option>
          <option value="Food">Mystery</option>
           <option value="Home & Living">Romance</option>
              <option value="Characters">Horrors</option>
         </select>
           <label className="label text-lg text-secondary font-medium ">Rating</label>
          <input defaultValue={book.rating} type="text" name='rating' className="input    rounded-full  focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-500 w-full" placeholder="Rating" />

          <label defaultValue={book.summary} className="label text-lg text-secondary font-medium ">Summary</label>
     <textarea name="summary" id="" className='textarea bg-white text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-amber-500 ' placeholder='Summary'>


     </textarea>
      <label className="label text-lg text-secondary font-medium">CoverImage URL</label>
      
            <input
            defaultValue={book.thumbnail}
              type="url"
              name="thumbnail"
              required
              className="input bg-white text-gray-500 w-full rounded-full focus:border-0 focus:outline-purple-200"
              placeholder="https://example.com/image.jpg"
            />
         
          <button className="w-full py-3 text-xl  text-slate-50 btn-active btn-primary  mt-4">Updated</button>
          

        </fieldset>
       
       </form>
       
 
      </div>
    </div>
        </div>
    );
};

export default UpdateBooks;