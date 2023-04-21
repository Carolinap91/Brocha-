import { Carousel } from 'react-bootstrap';
import './Slider.css';


import slider23 from '../../img/imgSlider/imgslider23.jpg'
import slider22 from '../../img/imgSlider/imgslider22.jpg'
import slider21 from '../../img/imgSlider/imgslider21.jpg'
import slider20 from '../../img/imgSlider/imgslider20.jpg'
import slider19 from '../../img/imgSlider/imgslider19.jpg'
import slider18 from '../../img/imgSlider/imgslider18.jpg'
import slider17 from '../../img/imgSlider/imgslider17.jpg'
import slider16 from '../../img/imgSlider/imgslider16.jpg'
import slider15 from '../../img/imgSlider/imgslider15.jpg'
import slider14 from '../../img/imgSlider/imgslider14.jpg'
import slider13 from '../../img/imgSlider/imgslider13.jpg'
import slider12 from '../../img/imgSlider/imgslider12.jpg'
import slider11 from '../../img/imgSlider/imgslider11.jpg'


function Slider() {
        return (
        <Carousel>
            <Carousel.Item>
                <img className='imgSlider' src={slider11} alt='Image 1' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider12} alt='Image 2' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider13} alt='Image 3'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider14} alt='Image 4'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider15} alt='Image 5' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider16} alt='Image 6'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider17} alt='Image 7'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider18} alt='Image 8' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider19} alt='Image 9'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider20} alt='Image 10'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider21} alt='Image 11'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider22} alt='Image 12'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgSlider'  src={slider23} alt='Image 13'/>
            </Carousel.Item>
        </Carousel>
        );
    }

    export default Slider;
