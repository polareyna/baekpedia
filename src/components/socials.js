import React, { Component } from 'react';
import instagramlogo from '../components/assets/img/instagram.png';
import youtubelogo from '../components/assets/img/youtube.png';
import twitterlogo from '../components/assets/img/twitter.png';
import './socials.scss';    


export default class Socials extends Component {
    render() {
      return (
          <div>
          <h1 className="title-socials">Baekhyun's Socials</h1>
            <div className="container-socials">
              <span onClick={(e) => {e.preventDefault();window.open('https://twitter.com/b_hundred_hyun?lang=es');}}>
            <img 
            className="icon" 
            src={twitterlogo} 
            alt="twitter"/>
            <small className="users">@B_Hundred_Hyun</small>
            </span>
            <span onClick={(e) => {e.preventDefault();window.open('https://www.instagram.com/baekhyunee_exo/?hl=es');}}>
            <img 
              className="icon" 
              src={instagramlogo} 
              alt="instagram"/>
            <small className="users">@baekhyunee_exo</small>
            </span>
            <span onClick={(e) => {e.preventDefault();window.open('https://www.youtube.com/channel/UCUyr5000laFgF79tWJB3rXQ');}}>
            <img 
              className="icon" 
              src={youtubelogo} 
              alt="youtube"/>
            <small className="users">백현 Baekhyun</small>
            </span>
            </div>
        </div>
      );
    }
  }