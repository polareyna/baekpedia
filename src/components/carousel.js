import React, { Component} from 'react';
import { Carousel } from 'react-bootstrap';
import BambiCover from './assets/img/Bambi-cover.png';
import ClCover from './assets/img/cityLights-cover.png';
import DelightCover from './assets/img/Delight-cover.jpg';
import BaekhyunCover from './assets/img/Baekhyun-cover.png';
import './carousel.scss';



export default class AppCarousel extends Component {
    render() {
      return (
        <Carousel className="carousel-container cursor">
        <Carousel.Item interval={2000}
                onClick={(e) => {e.preventDefault();window.open('https://open.spotify.com/album/5xOx4mWABbTj0qWyZC4q1p');}}>
          <img
            className="d-block w-100"
            src={BambiCover}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="title-background">
                <h3 className="titles"><strong>Bambi</strong> </h3>
                    <p> <small>The 3rd Mini Album</small> </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}
                onClick={(e) => {e.preventDefault();window.open('https://open.spotify.com/album/6AeMj5CMeTXRGhmUuv0LH3?si=kPpiDpodR7aXmLMF8ivESg&dl_branch=1');}}>
          <img
            className="d-block w-100"
            src={ClCover}
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <div className="title-background">
            <h3 className="titles"><strong>City Lights</strong></h3>
            <p className="titles" >The 1st Mini Album</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}
                        onClick={(e) => {e.preventDefault();window.open('https://open.spotify.com/album/75sPv82oaDKYjtuuS4l3Vc?si=KzNbPMIURKeZ4MXI4kdrJQ&dl_branch=1');}}>
          <img
            className="d-block w-100"
            src={DelightCover}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <div className="title-background">
            <h3 className="titles" ><strong>Delight</strong> </h3>
            <p> The 2nd Mini Album</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}
                        onClick={(e) => {e.preventDefault();window.open('https://open.spotify.com/album/1jV1UooTpZ7c90umcENmOC?si=JhJSSn93SFKi8yDJmSdayA&dl_branch=1');}}>
          <img
            className="d-block w-100"
            src={BaekhyunCover}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <div className="title-background">
            <h3 className="titles" ><strong>BAEKHYUN</strong></h3>
            <p>The 1st Japanese Mini Album</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>     
      );
    }
  }
