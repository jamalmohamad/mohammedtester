import { Carousel } from "react-bootstrap";
import TestPic from "./testpic2.jpg";

export function Carousal() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={TestPic}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}