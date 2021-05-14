import "../style/styleHome.scss";
import { CardColumns, Card } from "react-bootstrap";

import Search from "./Search";
import Carousel from "./Carousel";

const Home = ({ books, categories, filteredBooks, handleChange }) => {
  return (
    <div >
      <Carousel className="divCarousel" />
      <Search handleChange={handleChange} categories={categories} />
      <CardColumns className="containerCard">
        {filteredBooks.map((book) => {
          return (
            <Card className="divCard">
              <Card.Img
                className="imageCard"
                variant="top"
                src={book.book_image}
              />
              <Card.Body>
                <Card.Title className="divTitle">{book.title}</Card.Title>
                <Card.Subtitle className="divTitleAuthor">
                  {book.author}
                </Card.Subtitle>
                <Card.Text className="divDescription">
                  {book.description.length <= 40
                    ? book.description
                    : book.description.slice(0, 40) + "..."}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
};
export default Home;
