import React, { useEffect, useState } from "react";
import {  useParams } from "react-router"; 
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import useAuth from "../Hooks/UseAuth";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import useAxios from "../Hooks/UseAxios";
import Comments from "./Comments";

const BookDetails = () => {
  const { user } = useAuth();
  const [book, setBook] = useState({});
  const [refreshComments, setRefreshComments] = useState(false); 
  const { id } = useParams();
  const instance = useAxiosSecure();
  const axiosInstance = useAxios();

  useEffect(() => {
    instance.get(`/books/${id}`).then((data) => {
      setBook(data.data);
    });
  }, [instance, id]);

  const handleComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value.trim();
    if (!comment) return;

    const newComment = {
      comment,
      book_id: book._id,
      name: user?.displayName,
      photo: user?.photoURL,
      time: new Date().toISOString(),
    };

    try {
      await axiosInstance.post("/comments", newComment);
      e.target.reset(); 
      setRefreshComments((prev) => !prev); 
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className="w-10/12 mx-auto py-15">
      <div className="lg:flex justify-center gap-8">
        <div className="lg:border p-4 rounded-2xl border-gray-500">
          <img
            className="w-100 h-120 rounded-2xl"
            src={book.coverImage}
            alt={book.title}
          />
        </div>
        <div>
          <h3 className="text-4xl font-bold">{book.title}</h3>
          <div className="flex gap-6 mt-3">
            <p className="text-lg font-semibold ">
              Author:<span className=""> {book.author}</span>
            </p>
            <span className="">|</span>
            <p className="flex gap-1 items-center">
              <IoIosStar size={20} color="#F59E0B" />
              <IoIosStar size={20} color="#F59E0B" />
              <IoIosStar size={20} color="#F59E0B" />
              <IoIosStar size={20} color="#F59E0B" />
              <IoIosStarHalf size={20} color="#F59E0B" />
              <span className="text-lg font-semibold">{book.rating}</span>
            </p>
          </div>
          <div className="divider"></div>
          <p className=" md:w-200 w-100">{book.summary}</p>

          <div className="space-y-2 mt-5">
            <p className="font-semibold flex items-center">
              <TbCategory size={20} color="#22C55E" /> CATEGORY:
              <span className=" ml-3 font-medium">
                {book.genre}
              </span>
            </p>
            <p className="font-semibold flex items-center">
              <FaRegUser size={20} color="#3B82F6" /> PUBLISHER:
              <span className=" ml-2.5 font-medium">
                {book.userName}
              </span>
            </p>
            <p className="font-semibold flex items-center">
              <MdAttachEmail size={20} color="#F59E0B" /> EMAIL:
              <span className=" ml-3 font-medium">
                {book.userEmail}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleComment} className="flex flex-col mt-6">
          <label className="text-xl font-semibold mb-3">Comment</label>

          <textarea
            name="comment"
            className="textarea textarea-bordered"
            placeholder="Add a comment..."
          ></textarea>

          <button className="btn btn-sm w-22 mt-3 bg-gradient-to-br from-red-700 via-amber-600 to-stone-900 text-white">
            Comment
          </button>
        </form>

        
        <Comments id={id} refresh={refreshComments} />
      </div>
    </div>
  );
};

export default BookDetails;

