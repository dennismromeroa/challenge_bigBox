import "../style/styleHome.scss";
import { Nav, Form, Navbar, NavDropdown } from "react-bootstrap";

const Search = ({
  categories,
  handleChange,
  handleSubmit,
  search,
  callListCategory,
  handlePagination,
  pagination,
  name,
}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <NavDropdown title={pagination}>
          <NavDropdown.Item onClick={() => handlePagination(10)}>
            10
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handlePagination(20)}>
            20
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handlePagination(30)}>
            30
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Category Books" id="navbarScrollingDropdown">
          {categories.length !== 0 ? (
            <NavDropdown.Item value="">Select</NavDropdown.Item>
          ) : (
            <NavDropdown.Item>loading</NavDropdown.Item>
          )}
          {categories &&
            categories.map((categorie) => {
              return (
                <>
                  <NavDropdown.Item
                    onClick={() =>
                      callListCategory(
                        categorie.newest_published_date,
                        categorie.list_name_encoded,
                        categorie.display_name
                      )
                    }
                  >
                    {categorie.display_name}
                  </NavDropdown.Item>
                </>
              );
            })}
        </NavDropdown>
        <Nav.Link>{name? name:(<h5>Select a Category</h5>)}</Nav.Link>
      </Nav>
      <Form className="divFormInput">
        <input
          onChange={handleChange}
          value={search}
          type="text"
          placeholder="Search"
          className="divInput"
        />
        <button className="divButton" onClick={handleSubmit}>
          Search
        </button>
      </Form>
    </Navbar>
  );
};
export default Search;
