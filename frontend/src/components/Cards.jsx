import React from 'react'

function Cards({items,onReadNow }) {
  return (
    <>
<div className='md:py-28 py-10 gap-5 md:px-5'>
<div className="card md:w-96  bg-base-100 shadow-xl  hover:scale-105 duration-500 dark:bg-slate-900 dark:text-white dark:border ">
  <figure><img className='lg:h-96 w-auto h-64' src={items.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-primary">NEW</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions flex justify-between py-5">
      <div className="badge badge-outline">₹ {items.price}</div> 
      <div>
      <button className="btn btn-outline rounded-2xl btn-primary"  onClick={() => onReadNow(items)}>Read Now</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards