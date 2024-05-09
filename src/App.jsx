import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ListSection from './components/ListSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      isbn: '1234567890',
      price: 10,
      publicationDate: '2022-01-01',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      isbn: '0987654321',
      price: 15,
      publicationDate: '2022-02-01',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      isbn: '5432109876',
      price: 20,
      publicationDate: '2022-03-01',
    },
  ]);
  const [selectedBook, setSelectedBook] = useState(null);
  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleBookDelete = (id) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.id !== id);
      // Reassign IDs sequentially
      const renumberedBooks = updatedBooks.map((book, index) => ({
        ...book,
        id: index + 1,
      }));
      if (selectedBook && selectedBook.id === id) {
        setSelectedBook(null);
      }
      return renumberedBooks;
    });
  };

  const handleBookSave = (book) => {
    if (selectedBook) {
      // Update existing book
      setBooks((prevBooks) =>
        prevBooks.map((b) => (b.id === selectedBook.id ? { ...b, ...book } : b))
      );
    } else {
      // Add new book
      const maxId = books.reduce((max, book) => Math.max(max, book.id), 0);
      const newId = maxId + 1;
      const newBook = { ...book, id: newId };
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <ListSection
          books={books}
          onBookSelect={handleBookSelect}
          onBookDelete={handleBookDelete}
        />
        <DetailsSection
          selectedBook={selectedBook}
          onSave={handleBookSave}
          onCancel={() => setSelectedBook(null)}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
