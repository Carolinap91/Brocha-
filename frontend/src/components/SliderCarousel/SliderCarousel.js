import { Carousel } from "react-bootstrap";
import "./SliderCarousel.css";

import slider23 from "../../img/imgSlider/imgslider23.jpg";
import slider22 from "../../img/imgSlider/imgslider22.jpg";
import slider21 from "../../img/imgSlider/imgslider21.jpg";
import slider20 from "../../img/imgSlider/imgslider20.jpg";
import slider19 from "../../img/imgSlider/imgslider19.jpg";
import slider18 from "../../img/imgSlider/imgslider18.jpg";
import slider17 from "../../img/imgSlider/imgslider17.jpg";
import slider16 from "../../img/imgSlider/imgslider16.jpg";
import slider15 from "../../img/imgSlider/imgslider15.jpg";
import slider14 from "../../img/imgSlider/imgslider14.jpg";
import slider13 from "../../img/imgSlider/imgslider13.jpg";
import slider12 from "../../img/imgSlider/imgslider12.jpg";
import slider11 from "../../img/imgSlider/imgslider11.jpg";

export const SliderCarousel = () => {
  const photos = [
    slider11,
    slider12,
    slider13,
    slider14,
    slider15,
    slider16,
    slider17,
    slider18,
    slider19,
    slider20,
    slider21,
    slider22,
    slider23
  ];
  return (
    <Carousel>
      {photos.map((photo, i) => (
        <Carousel.Item key={i}>
          <img className="imgSlider" src={photo} alt={`slider ${i}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
