import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookStore from "./Bookstore";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5200/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="container  ">
        <div className="pt-[150px] items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-500"> Here! </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button class="button mt-10 dark:text-white dark:border">
              Back
            </button>
          </Link>
        </div>{" "}
        <BookStore books={book} />
      </div>
    </>
  );
}

export default Course;
