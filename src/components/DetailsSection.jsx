import React, { useState, useEffect } from 'react';

function DetailsSection({ selectedBook, onSave, onCancel }) {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: '',
    price: '',
    publicationDate: new Date(),
  });

  useEffect(() => {
    if (selectedBook) {
      setBookData(selectedBook);
    } else {
      setBookData({
        title: '',
        author: '',
        isbn: '',
        price: '',
        publicationDate: new Date(),
      });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevBookData) => ({
      ...prevBookData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setBookData({
      title: '',
      author: '',
      isbn: '',
      price: '',
      publicationDate: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(bookData);
    handleClear();
  };

  return (
    <div className="content-details"> 
      <h2>Book Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="field1" 
            name="title"
            placeholder="Title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="field2"
            name="author"
            placeholder="Author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="field3" 
            name="isbn"
            placeholder="ISBN"
            value={bookData.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            id="field4" 
            name="price"
            placeholder="Price"
            value={bookData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="date"
            id="field5" 
            name="publicationDate"
            placeholder="Publication Date"
            value={bookData.publicationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button id="saveButton" type="submit"> 
            Save
          </button>
          <button id="clearButton" type="button" onClick={handleClear}> 
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailsSection;
