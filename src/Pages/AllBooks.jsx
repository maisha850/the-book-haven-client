
// import React, { useEffect, useState } from 'react';


// import { Link } from 'react-router';
// import star from '../assets/star.png'
// import useAxios from '../Hooks/UseAxios';

// const AllBooks = () => {
//     const axiosSec = useAxios()
//     const [books, setBooks]=useState([])
//     const[loading, setLoading]=useState(true)
//     useEffect(()=>{
//         axiosSec.get('/books')
//         .then(data => {
//             console.log('after post' , data.data)
//             setBooks(data.data)
//             setLoading(false)

//         })
//     },[axiosSec])

//     if(loading){
//       return <span className='loading loading-dots loading-xl mx-auto'></span>
//     }
    
    
//     return (
//        <div>
//          <div className='w-11/12 mx-auto py-15'>
//             <div className="overflow-x-auto  md:table-md table-xs" >
//             <table className='table table-zebra bg-form '>
//                  <thead className='bg-white/80 w-full'>
//       <tr>
       
//         <th>Cover Image</th>
//         <th>Title</th>
//         <th>Author</th>
//         <th>Genre</th>
//         <th className='flex items-center gap-1'>Ratings <span><img className='w-4 h-4' src={star} alt="" /></span> </th>
//         <th>Action</th>
//       </tr>
//     </thead>

      
//          <tbody>
//                {
//                 books.map(book=><tr key={book._id}>
      
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="w-15 h-18">
//                 <img
//                   src={book.coverImage}
//                   alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
          
//           </div>
//         </td>
//         <td>
//             {book.title}
//         </td>
//         <td>
//             {book.author}

//         </td>
//         <td>{book.genre}</td>
  
            
//         <td> {book.rating}</td>
        
//         <th>
//        <Link to={`/book-details/${book._id}`} className='btn bg-gradient-to-br from-red-700 via-amber-600 to-stone-900  btn-sm rounded-3xl text-white shadow-xl'>View details</Link>
//         </th>
//         <div className="divider"></div>
//       </tr> 
//       )
      
//             }
//          </tbody>
//                   </table>
            
//         </div>
            
//         </div>
//        </div>
//     );
// };

// export default AllBooks;
import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/UseAxios';
import BookCard from '../Componants/BookCard';

const AllBooks = () => {
  const axiosSec = useAxios();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [dateFilter, setDateFilter] = useState('all');
  const [ratingSort, setRatingSort] = useState('none');




  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  useEffect(() => {
    axiosSec.get('/books')
      .then(data => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSec]);

  if (loading) {
    return <span className='loading loading-dots loading-xl mx-auto'></span>;
  }

  // Filter books by search term
 const filteredBooks = books
  // Search + Genre
  .filter(book => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === 'All' || book.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  })

  // Date filter
  .filter(book => {
    if (dateFilter === 'all') return true;

    const bookDate = new Date(book.created_at);
    const now = new Date();

    if (dateFilter === '7days') {
      const last7Days = new Date();
      last7Days.setDate(now.getDate() - 7);
      return bookDate >= last7Days;
    }

    if (dateFilter === '30days') {
      const last30Days = new Date();
      last30Days.setDate(now.getDate() - 30);
      return bookDate >= last30Days;
    }

    return true;
  })

  // Date sort
  .sort((a, b) => {
    if (dateFilter === 'newest') {
      return new Date(b.created_at) - new Date(a.created_at);
    }
    if (dateFilter === 'oldest') {
      return new Date(a.created_at) - new Date(b.created_at);
    }
    return 0;
  })

  // Rating sort
  .sort((a, b) => {
    if (ratingSort === 'high') {
      return (b.rating || 0) - (a.rating || 0);
    }
    if (ratingSort === 'low') {
      return (a.rating || 0) - (b.rating || 0);
    }
    return 0;
  });


  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  // Generate professional page numbers with dots
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      // Show all pages if small number
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Show first, last, current ±1, with dots
      if (currentPage > 3) pages.push(1, '...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...', totalPages);
      else if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };


  return (
    <div className='w-10/12 mx-auto py-15'>
      {/* Search Bar */}
      <div className='mb-8'>
 {/* Search & Filter */}
<div className="mb-8 flex flex-col md:flex-row gap-4">
  {/* Search */}
  <input
    type="text"
    placeholder="Search books..."
    className="w-full   p-3 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
    value={searchTerm}
    onChange={(e) => {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
    }}
  />

  {/* Genre Filter */}
  <select
    className="w-1/2  p-3 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
    value={selectedGenre}
    onChange={(e) => {
      setSelectedGenre(e.target.value);
      setCurrentPage(1);
    }}
  >
    <option value="All">All Genres</option>
    <option value="Fantasy">Fantasy</option>
    <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
    <option value="Mystery">Mystery</option>
    <option value="Romance">Romance</option>
    <option value="Horrors">Horrors</option>
  </select>
  {/* Date Filter */}
  <select
    className="w-1/2 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
    value={dateFilter}
    onChange={(e) => {
      setDateFilter(e.target.value);
      setCurrentPage(1);
    }}
  >
    <option value="all">All Dates</option>
    <option value="newest">Newest First</option>
    <option value="oldest">Oldest First</option>
    <option value="7days">Last 7 Days</option>
    <option value="30days">Last 30 Days</option>
  </select>
  {/* Rating Sort */}
<select
  className="w-1/2 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
  value={ratingSort}
  onChange={(e) => {
    setRatingSort(e.target.value);
    setCurrentPage(1);
  }}
>
  <option value="none">Sort by Rating</option>
  <option value="high">Highest Rated</option>
  <option value="low">Lowest Rated</option>
</select>
</div>

      </div>

      {/* Books Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {currentBooks.length > 0 ? (
          currentBooks.map(book => <BookCard key={book._id} book={book} />)
        ) : (
          <p className="col-span-4 text-center text-gray-500">No books found.</p>
        )}
      </div>

      {/* Professional Pagination */}
      {totalPages > 1 && (
        <div className='flex flex-wrap justify-center items-center mt-10 gap-2'>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Previous
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={page === '...'}
              className={`px-4 py-2 rounded-lg border ${
                page === currentPage
                  ? 'bg-orange-400 text-white'
                  : page === '...'
                  ? 'bg-white text-gray-400 cursor-default'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
