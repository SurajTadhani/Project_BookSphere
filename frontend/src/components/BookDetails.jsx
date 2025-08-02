import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://project-booksphere.onrender.com/book/${id}`, {
          withCredentials: true,
        });
        setBook(res.data.book);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <p className="text-center text-5xl py-10 pt-36">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!book) return <p className="text-center py-10">No book found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 pt-28">
      {/* Book Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">{book.name}</h1>

      {/* Main Info Section */}
      <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-lg p-6 rounded-lg">
        <img
          src={book.image}
          alt={book.name}
          className="w-full lg:w-1/2 object-cover rounded-md max-h-[400px]"
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Title:</span> {book.title}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {book.category}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">Price:</span> ₹{book.price}
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident sit
              excepturi! Nobis minima quae repellat saepe pariatur, voluptate corrupti?
            </p>
          </div>

          <button
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 duration-200 w-fit"
            onClick={handleBack}
          >
            ← Back to List
          </button>
        </div>
      </div>

  
    </div>
  );
};

export default BookDetails;
