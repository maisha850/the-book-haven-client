
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

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch the book data using axios
  useEffect(() => {
    instance
      .get(`/updateBooks/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load book details');
        setLoading(false);
      });
  }, [id, instance]);

  // ✅ Handle form submit (Update)
  const handleUpdateBooks = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;

    const updatedBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    instance
      .patch(`/updateBooks/${book._id}`, updatedBook)
      .then((res) => {
        if (res.data.modifiedCount > 0 || res.status === 200) {
          toast.success('Book updated successfully!');
          navigate('/all-books');
        } else {
          toast.error('No changes were made.');
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to update book.');
      });
  };

  if (loading) {
    return <p className="text-center text-xl mt-20">Loading book details...</p>;
  }

  if (!book) {
    return <p className="text-center text-xl mt-20 text-red-500">Book not found.</p>;
  }

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
                required
                className="input rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800 w-full"
                placeholder="Title"
              />

              <label className="label text-lg text-secondary font-medium">Author</label>
              <input
                defaultValue={book.author}
                type="text"
                name="author"
                required
                className="input rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800 w-full"
                placeholder="Author"
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
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.5"
                required
                className="input rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-800 w-full"
                placeholder="Rating (1-5)"
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
                required
                className="input bg-white text-gray-800 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="https://example.com/image.jpg"
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
