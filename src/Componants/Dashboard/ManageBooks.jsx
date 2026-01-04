import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const ManageBooks = () => {
  const axiosSec = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all books
  useEffect(() => {
    axiosSec.get("/books").then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, [axiosSec]);

  // Delete book
//   const handleDelete = (id) => {
//     if (!confirm("Are you sure you want to delete this book?")) return;

//     axiosSec.delete(`/dltBooks/${id}`).then(() => {
  
//       toast.success("Book deleted");
//     });
//   };
       const handleDelete=(id)=>{
              Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSec.delete(`/dltBooks/${id}`)
            .then(data =>{
                  console.log('after delete' , data.data)
                      setBooks(books.filter((book) => book._id !== id));
                   Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      
              })
            
  
        }
      });
            
          }

  // Open edit modal
  const handleEdit = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Update book
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: parseFloat(e.target.rating.value),
    };

    axiosSec
      .patch(`/updateBooks/${selectedBook._id}`, updatedBook)
      .then(() => {
        toast.success("Book updated");

        setBooks((prev) =>
          prev.map((b) =>
            b._id === selectedBook._id ? { ...b, ...updatedBook } : b
          )
        );

        setIsModalOpen(false);
      });
  };

  if (loading) {
    return <span className="loading loading-spinner"></span>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Books</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>
                    <img className="w-12 h-15" src={book.coverImage} alt="" />
                </td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td className="flex gap-2 items-center mt-5">
                  <button
                    onClick={() => handleEdit(book)}
                    className="btn btn-xs btn-info"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Edit Book</h3>

            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                name="title"
                defaultValue={selectedBook.title}
                className="input input-bordered w-full"
                placeholder="Title"
              />
              <input
                name="author"
                defaultValue={selectedBook.author}
                className="input input-bordered w-full"
                placeholder="Author"
              />
              <input
                name="genre"
                defaultValue={selectedBook.genre}
                className="input input-bordered w-full"
                placeholder="Genre"
              />
              <input
                name="rating"
                type="number"
                step="0.1"
                defaultValue={selectedBook.rating}
                className="input input-bordered w-full"
                placeholder="Rating"
              />

              <div className="modal-action">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageBooks;
