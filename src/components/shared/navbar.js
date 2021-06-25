import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { Navbar,Nav } from 'react-bootstrap';
  import Home from '../home';
  import Profile from '../profile';
  import './navbar.scss';

class HomeNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>    
                            <Navbar  bg="transparent" expand="lg" variant="dark">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link className="item" href="/">Home</Nav.Link>
                                    <Nav.Link className="item" href="/profile">Baekhyun</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/profile">
                                    <Profile />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default HomeNavbar;


