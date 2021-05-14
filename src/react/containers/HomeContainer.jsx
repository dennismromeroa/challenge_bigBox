import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSearchBooks } from "../../redux/action/action_books";
import { getCategoryBooks } from "../../redux/action/action_category";
import Home from "../components/Home";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const books = useSelector((state) => state.books.books);
  const categories = useSelector((state) => state.category.category);

  useEffect(() => dispatch(getSearchBooks()), []);
  useEffect(() => dispatch(getCategoryBooks()), []);

/*  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => {
        return book.title.toLowerCase().includes(search.toLocaleLowerCase());
      })
    );
  }, [search, books]); */

  useEffect(()=>{
      setFilteredBooks(books)
  })

  const handleSubmit = (e)=>{
      console.log("entro en submit")
   
   
  }

  const handleEnter = (e)=>{
      console.log("entro en enter")
    e.preventDefault();
    if(e.key === "Enter"){
        handleSubmit()
    }
  }

  const handleChange = (e) => {
    console.log("handleChange")
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <>
      <Home
        books={books}
        filteredBooks={filteredBooks}
        handleChange={handleChange}
        categories={categories}
        handleSubmit={handleSubmit}
        handleEnter={handleEnter}
      />
    </>
  );
};
export default HomeContainer;
