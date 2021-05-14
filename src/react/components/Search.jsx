import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../style/styleHome.scss";
import {
  Nav,
  Form,
  Navbar,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import { getSearchBooks } from "../../redux/action/action_books";
import { getCategoryBooks } from "../../redux/action/action_category";

const Home = ({ categories, handleChange, handleSubmit, handleEnter }) => {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState(10);

  const callListCategory = (e) => {
    const [data, list] = e.target.value.split(":");
    dispatch(getSearchBooks(data, list));
  };
  const handlePagination = (e) => {
    console.log(pagination, "paginatiooon");
    const value = e.target.value;
    setPagination(value);
    dispatch(getCategoryBooks);
  };

  categories = categories.slice(0, pagination);

  return (
    <div className="divFormContainer">
      <div>
        <div>
          <select name="" id="" onClick={handlePagination}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>

          <select
            onClick={callListCategory}
            title="Category Books"
            id="navbarScrollingDropdown"
          >
            {categories.length !== 0 ? (
              <option value="">Select</option>
            ) : (
              <option>loading</option>
            )}

            {categories &&
              categories.map((categorie) => {
                return (
                  <>
                    <option
                      value={`${categorie.newest_published_date}:${categorie.list_name_encoded}`}
                    >
                      {categorie.display_name}
                    </option>
                  </>
                );
              })}
          </select>
        </div>
        
          <input
            onKeyPress={handleEnter}
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <button onClick={handleSubmit} >Search</button>
        
      </div>
    </div>
  );
};
export default Home;
