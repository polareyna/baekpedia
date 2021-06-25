import React, { Component } from 'react';
import Socials from './socials';
import Cards from './cards';
import AppCarousel from './carousel';
import './home.scss';
import BaekCarousel from './baekcarousel';

export default class Home extends Component {
  render() {
    return (
      <div className="home-background">
        <BaekCarousel></BaekCarousel>
        <p className="title"> Baekhyun's Solo Discography </p>
        <AppCarousel></AppCarousel>
        <p className="title"> Check out Baekhyun's Group Projects </p>
        <Cards></Cards>
        <Socials></Socials>
      </div>
    );
  }
}