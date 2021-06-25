import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import exo from '../components/assets/img/exo.png';
import exocbx from '../components/assets/img/exo-cbx.jpg';
import superm from '../components/assets/img/superm.jpeg';
import exologo from '../components/assets/img/exo-logo.png';
import exocbxlogo from '../components/assets/img/exocbx-logo.png';
import supermlogo from '../components/assets/img/superm-logo.png';
import "./cards.scss";



export default class Cards extends Component {
  render() {
    return (
        <CardGroup className="container">
          <Card className="card">
            <Card.Img className="card-image" variant="top" src={exo} />
            <Card.Body>
              <Card.Title className="card-title"> 
              <img className="logo" src={exologo} alt="exo logo"/>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-image" variant="top" src={exocbx}/>
            <Card.Body>
              <Card.Title className="card-title">
                <img className="logo" src={exocbxlogo} alt="exo logo"/>
                </Card.Title>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-image" variant="top" src={superm} />
            <Card.Body>
              <Card.Title className="card-title">
              <img className="superm-logo" src={supermlogo} alt="exo logo"/>
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup> 
    );
  }
}