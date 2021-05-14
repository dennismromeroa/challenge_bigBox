import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSearchBooks } from "../../redux/action/action_books";
import { getCategoryBooks } from "../../redux/action/action_category";
import Home from "../components/Home";
import Search from "../components/Search";
import Carousel from "../components/Carousel";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [pagination, setPagination] = useState(10);
  const [name, setName] = useState("");

  useEffect(() => dispatch(getCategoryBooks()), []);

  const books = useSelector((state) => state.books.books);
  const categories = useSelector((state) => state.category.category);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const callListCategory = (value1, value2, name) => {
    setName(name);
    dispatch(getSearchBooks(value1, value2));
  };
  const handlePagination = (value) => {
    setPagination(value);
    dispatch(getCategoryBooks);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setFilteredBooks(finalBooks);
    setSearch("");
  };

  let reducedCategories = categories.slice(0, pagination);

  return (
    <>
      <Carousel />
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        callListCategory={callListCategory}
        handlePagination={handlePagination}
        categories={reducedCategories}
        search={search}
        pagination={pagination}
        name={name}
      />
      <Home filteredBooks={filteredBooks} />
    </>
  );
};
export default HomeContainer;
