import React, { useState } from 'react';
import Navbar from './Navigation'; 
import Cards from './Cards'; 
import BookDetails from './BookDetails';

const BookStore = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle book selection
  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      {selectedBook ? (
        <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />
      ) : (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {filteredBooks.map((item) => (
            <Cards items={item} key={item.id} onReadNow={handleBookSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookStore;
