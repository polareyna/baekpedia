import React from "react";
import { Carousel } from "react-bootstrap";
import { Component } from "react";
import baek1 from './assets/img/baek1.jpg';
import baek3 from './assets/img/baek3.jpg';
import baek6 from './assets/img/baek6.jpg';
import baek7 from './assets/img/baek7.jpg';
import './baekcarousel.scss';


export default class BaekCarousel extends Component {
    render(){
        return (
            <Carousel fade>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={baek7}
                alt="First slide"
              />
              <Carousel.Caption>
                <div>
                <h3 className="titles-bc" ><strong>BAEKHYUN</strong></h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={baek1}
                alt="Second slide"
              />
          
              <Carousel.Caption>
              <div>
              <h3 className="titles-bc" ><strong>BAEKHYUN</strong></h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={baek6}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <div>
              <h3 className="titles-bc" ><strong>BAEKHYUN</strong></h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={baek3}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <div>
              <h3 className="titles-bc" ><strong>BAEKHYUN</strong></h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>    
        );

    }
      
}