import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ items }) {
  const navigate = useNavigate();

  const handleReadNow = () => {
    navigate(`/book/details/${items._id}`);
  };

  return (
    <div className="">
      <div className="container mx-auto flex justify-center md:py-14 py-10 gap-5 md:px-5">
        <div className="card md:w-96 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white border-[1px] dark:border cursor-pointer">
          <figure>
            <img
              className="lg:h-80 w-auto h-64 hover:scale-95 duration-500 overflow-hidden"
              src={items.image}
              alt="Book"
            />
          </figure>
          <div className="p-5">
            <h2 className="card-title">
              {items.name}
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p>{items.title}</p>
            <div className="card-actions flex justify-between py-5">
              <div className="badge badge-outline">₹ {items.price}</div>
              <div>
                <button
                  className="btn btn-outline rounded-2xl dark:text-white"
                  onClick={handleReadNow}
                >
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
