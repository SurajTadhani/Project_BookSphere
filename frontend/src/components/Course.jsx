import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookStore from "./Bookstore";

function Course() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://project-booksphere.onrender.com/book", {
          withCredentials: true,  // Remove if not needed
        });
        setBook(res.data);
        setLoading(false); // <-- turn off loading once data fetched
      } catch (error) {
        console.log("Error", error);
        setLoading(false); // <-- stop loading even on error
      }
    };
    getBook();
  }, []);

  return (
    <div className="container">
      <div className="pt-[80px] items-center justify-center text-center">
        <Link className="flex justify-start mb-10" to="/">
          <button className="button mt-10 dark:text-white dark:border">
            Back
          </button>
        </Link>
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-blue-500">Here!</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </p>
      </div>

      {/* Loading or BookStore */}
      {loading ? (
        <div className="text-center my-20 text-2xl font-medium">Loading...</div>
      ) : (
        <BookStore books={book} />
      )}
    </div>
  );
}

export default Course;
