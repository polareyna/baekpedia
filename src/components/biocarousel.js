import React from "react";
import { Carousel } from "react-bootstrap";
import { Component } from "react";
import redbaek from './assets/img/delight-records.jpg';
import psychoperf from './assets/img/psycho.jpg';
import underwaterper from './assets/img/underwater.jpg';
import './biocarousel.scss';


export default class BioCarousel extends Component {
    render(){
        return (
            <Carousel fade>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={redbaek}
                alt="First slide"
              />
              <Carousel.Caption>
              <div className="title-background">
                <h3 className="titles-bio"> <small>Delight was the first album 
                by a soloist in 19 years to sell 1M copies in South Korea.
                </small> </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={psychoperf}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <div className="title-background">
                <h3 className="titles-bio"> <small>
                    Baekhyun's solo concert BEYOND LIVE:LIGHTS was the 2nd most viewed 
                    online concert in 2020.
                </small> </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 carousel-image"
                src={underwaterper}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <div className="title-background">
                <h3 className="titles-bio"> <small>
                    Underwater, a Delight B-Side, was mentioned by the Recording Academy in 2020 as a "new, fresh take
                    on korean R&B".
                </small> </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>    
        );

    }
      
}