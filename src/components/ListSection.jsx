import React from 'react';

function ListSection({ books, onBookSelect, onBookDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toString(); 
  };

  return (
    <div className="content-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div onClick={() => onBookSelect(book)}>
              <p><strong>ID:</strong> <span className='id'>{book.id}</span></p>
              <p><strong>Title:</strong> <span className='field1'>{book.title}</span></p>
              <p><strong>Author:</strong> <span className='field2'>{book.author}</span></p>
              <p><strong>ISBN:</strong> <span className='field3'>{book.isbn}</span></p>
              <p><strong>Price:</strong> <span className='field4'>{book.price}</span></p>
              <p><strong>Publication Date:</strong> <span className='field5'>{formatDate(book.publicationDate)}</span></p>
            </div>
            <button className="deleteButton" onClick={() => onBookDelete(book.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListSection;