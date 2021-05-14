import "../style/styleHome.scss";
import { CardColumns, Card } from "react-bootstrap";

const Home = ({ filteredBooks }) => {
  return (
    <div>
      <CardColumns className="containerCard">
        {filteredBooks.map((book) => {
          return (
            <Card key={book} className="divCard">
              <a
                target="_blank"
                href={`https://www.google.com/search?q=${book.author}`}
              >
                <Card.Img
                  className="imageCard"
                  variant="top"
                  src={book.book_image}
                />
              </a>

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
