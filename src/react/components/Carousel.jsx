import "../style/styleHome.scss";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";

const CarouselComponent = () => {
  return (
    <Carousel className="divCarousel">
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselComponent;
