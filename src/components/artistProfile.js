import React from "react";
import { Component } from "react";
import { GROUP_INFO } from "./constants";
import { Card, CardGroup } from "react-bootstrap";

export default class ArtistProfile extends Component {
    render(){
        return (
            <CardGroup className="container">
                <Card className="card">
                    <Card.Body>
                    {GROUP_INFO.filter(group => group.name === 'exo').map(filteredGroup => (
                        <Card.Title className="card-title"> 
                            {filteredGroup.name}    
                        </Card.Title>
                         ))}
                        {GROUP_INFO.filter(group => group.name === 'exo').map(filteredGroup => (
                        <Card.Subtitle className="mb-2 text-muted"> Baekhyun's Position: {filteredGroup.b_position}, </Card.Subtitle>
                        ))}
                        {GROUP_INFO.filter(group => group.name === 'exo').map(filteredGroup => (
                        <Card.Text>
                            {filteredGroup.bio} 
                        </Card.Text>
                        ))}
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Body>
                    <Card.Title className="card-title">
                    {/* {GROUP_INFO.filter(group => group.name = 'cbx').map(filteredName => (
                        {filteredName}))}                         */}
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Body>
                    <Card.Title className="card-    title">
                    {/* {GROUP_INFO.filter(group => group.name = 'superm').map(filteredName => (
                                                    {filteredName}))}                         */}
                    </Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>  
    );
  }
}