
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../Hooks/UseAuth';
import useAxios from '../Hooks/UseAxios';
import toast from 'react-hot-toast';

const UpdateBooks = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const instance = useAxios();
  const [book, setBook] = useState({});

  useEffect(() => {
    instance.get(`/updateBooks/${id}`).then((res) => setBook(res.data));
  }, [id, instance]);

  const handleUpdateBooks = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    instance.patch(`/updateBooks/${book._id}`, updatedBook).then(() => {
      toast.success('Book updated successfully!');
      navigate('/all-books');
    });
  };

  return (
    <div className="w-11/12 mx-auto pb-15">
      <h1 className="text-5xl font-bold text-center my-10">Update the Book</h1>
      <div className="card md:w-150 shrink-0 shadow-2xl mx-auto">
        <div className="card-body bg-form rounded-2xl">
          <form onSubmit={handleUpdateBooks}>
            <fieldset className="fieldset">
              <label className="label text-lg text-secondary font-medium">Title</label>
              <input
                defaultValue={book.title}
                type="text"
                name="title"
                className="input rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800 w-full"
                placeholder="Title"
                required
              />

              <label className="label text-lg text-secondary font-medium">Author</label>
              <input
                defaultValue={book.author}
                type="text"
                name="author"
                className="input rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800 w-full"
                placeholder="Author"
                required
              />

              <label className="label text-lg text-secondary font-medium">Genre</label>
              <select
                defaultValue={book.genre}
                name="genre"
                className="select bg-white text-gray-800 w-full rounded-full focus:ring-2 focus:ring-amber-500"
                required
              >
                <option disabled>Select Genre</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Horrors">Horrors</option>
              </select>

              <label className="label text-lg text-secondary font-medium">Rating</label>
              <input
                defaultValue={book.rating}
                type="text"
                name="rating"
                className="input rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800 w-full"
                placeholder="Rating"
                required
              />

              <label className="label text-lg text-secondary font-medium">Summary</label>
              <textarea
                defaultValue={book.summary}
                name="summary"
                className="textarea bg-white text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Summary"
                required
              />

              <label className="label text-lg text-secondary font-medium">Cover Image URL</label>
              <input
                defaultValue={book.coverImage}
                type="url"
                name="coverImage"
                className="input bg-white text-gray-800 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="https://example.com/image.jpg"
                required
              />

              <button className="w-full py-3 text-xl text-slate-50 btn-active btn-primary mt-4">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooks;
