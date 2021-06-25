import React, { Component } from 'react';
import BioCarousel from './biocarousel';
import './profile.scss';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <BioCarousel></BioCarousel>
        <div className="divider">  
          <div class="jumbotron jumbotron-billboard"
          onClick={(e) => {e.preventDefault();window.open('https://www.smtown.com/search?keyword=baekhyun');}}>
            <div class="img"></div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <h1 className="bio-title"> Meet the Genius Idol</h1>
                      <p className="bio-content">
                        Born May 2nd 1992, Byun Baekhyun. The top tenor of South 
                        Korea, the member of 3 succesful groups and the double million seller soloist.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}