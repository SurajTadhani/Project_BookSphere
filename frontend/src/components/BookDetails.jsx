import React from 'react';

const BookDetails = ({ book, onBack }) => {
  return (
    <div className="book-details space-y-5 border md:p-10 my-10">
      
      <h1>{book.name}</h1>
      <img src={book.image} className='lg:h-72' alt={book.name} />
      <p><h4>Title : </h4>{book.title}</p>
      <p>Price : ₹{book.price}</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et nisi deserunt amet veniam quidem numquam aliquam vero animi. Magnam dolorem consequuntur commodi unde saepe facere dolores pariatur, delectus cumque necessitatibus omnis, harum laborum amet mollitia animi recusandae facilis porro. Voluptas, officiis. Amet consectetur architecto voluptatum dignissimos eum molestias deserunt dolorem? Deleniti molestiae similique velit. Quod eveniet labore similique totam itaque nobis assumenda sapiente animi accusantium sequi maiores delectus velit, sint nostrum voluptatem nam quaerat beatae nemo minus. Ut corporis veniam fuga tempora vel, error sunt nostrum commodi, repellendus laborum odit tempore odio architecto in, blanditiis maxime obcaecati nemo soluta quo sequi exercitationem earum atque. Mollitia, repellendus quaerat numquam similique nesciunt possimus sequi voluptas iste ad porro iusto vitae deleniti cupiditate veritatis, quidem accusamus nam commodi praesentium blanditiis. Ab rerum, iusto illum veniam officia velit consequatur minus sequi iste, numquam laboriosam dolorem nobis quasi esse distinctio alias aliquid porro autem. Vel non repellendus tenetur esse pariatur dolores praesentium suscipit, molestias magnam distinctio, numquam, nostrum at excepturi sit possimus. Saepe ut sit minima iure provident architecto rem et veritatis non. Accusamus consequuntur, aliquam, dolor consectetur eum aspernatur deserunt veniam quia architecto praesentium sit quidem facere, repellat temporibus sapiente maxime magnam voluptates.</p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ullam. Asperiores velit aut inventore amet debitis corporis voluptas at exercitationem facilis soluta culpa minima necessitatibus alias, voluptatum illum cum illo ut molestiae dolorem aliquam laudantium! Temporibus, maxime! Fuga sit officia placeat id corporis amet perspiciatis ea? Distinctio ea impedit possimus molestiae repellat unde aperiam itaque laborum accusamus ab magni, repellendus deleniti architecto doloribus tempore minus eos sapiente officia ratione mollitia tempora quo optio? Doloribus non suscipit veniam fuga eos consectetur! Dolorum cupiditate quasi laboriosam voluptate quibusdam quas assumenda cumque, at eos. Ea eveniet veritatis optio unde quasi culpa quo facere dignissimos amet ab, illum animi, itaque porro, necessitatibus architecto impedit enim adipisci! Eligendi maxime asperiores cum iste autem? Minima, quo. Aperiam soluta quis reiciendis, at quos enim, eius est quam fuga eveniet quibusdam harum ut obcaecati architecto? Omnis nesciunt nihil ipsam saepe ratione laboriosam sequi ex ut sit iure, ab sint in facilis est voluptate atque eveniet dicta similique voluptatum recusandae iusto quas commodi! Omnis magnam, nam quos molestias aliquid provident minus amet asperiores dignissimos facilis veritatis ipsum cupiditate, cumque temporibus? Atque perspiciatis quibusdam nulla fugiat, labore repellat 
     </p>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi aliquid delectus sapiente possimus, ratione inventore molestias assumenda dignissimos laudantium quos at ullam totam quaerat enim repudiandae, ducimus maxime omnis eius provident. Deserunt obcaecati optio a iste? Laudantium, ex, voluptatibus mollitia quas voluptas laboriosam itaque porro officia velit cum, commodi dignissimos!</p>
     <div className="py-10">
      <div className="flex justify-between items-center flex-col md:flex-row space-y-10">
        <div className='md:w-1/2 sm:px-5'>
          <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='lg:w-1/2 sm:px-5'>
          <h3 className='text-dark text-2xl'>Lean Startup workshop - the winner gets it all!</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vel quae perferendis reiciendis assumenda aperiam excepturi optio eaque minima voluptas, possimus rerum quia laboriosam sequi debitis dolor in quaerat ipsum magnam cum totam iste! Omnis, commodi possimus maiores vel veniam voluptates unde repellendus sit voluptatem reprehenderit ullam repellat quaerat beatae tenetur eum nostrum libero animi non vero. Modi minus inventore aspernatur mollitia provident! Odit amet magnam, accusantium ad et perferendis magni repellendus, hic cum modi, ipsam dicta esse blanditiis consequuntur quasi. Soluta nihil nostrum ratione eligendi quos quas hic iste in sequi itaque blanditiis perspiciatis, magnam laborum consectetur est sed harum ab quo error minima? Ipsum tenetur quam esse nobis aut! Nobis facilis rem mollitia odit nemo fuga optio error dolor ad Odio asperiores odit, quae iure perspiciatis repudiandae culpa totam vero dolorem deleniti quasi reprehenderit!</p>
        </div>
      </div>
     </div>
     <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300' onClick={onBack}>Back to list</button>
    </div>
  );
};

export default BookDetails;
