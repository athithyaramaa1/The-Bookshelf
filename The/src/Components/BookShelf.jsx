import { useEffect, useState } from "react";
import axios from "axios";
import "./BookShelf.css";
import Navbar from "./Navbar";

const BookShelf = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
// Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          {
            headers: { Authorization: "whatever-you-want" },
          }
        );
        setData(response.data.books);
        console.log(response.data.books);
        setFilter(response.data.books);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
// Giving the filter functionality
  const handleChange = (searchTerm) => {
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilter(filteredBooks);
  };
// Displaying the data 
  return (
    <>
      <Navbar handleChange={handleChange} />
      <div className="entire-container">
        <div className="grid-container">
          {filter.map((ele) => (
            <div key={ele.id} className="individual-elements">
              <img src={ele.imageLinks.thumbnail} alt="" className="books" />
              <h3>{ele.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookShelf;
