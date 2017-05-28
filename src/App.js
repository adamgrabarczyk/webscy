import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Nav, Navbar, NavItem,
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


import Home from './Home'
import About from './About'
import SingIn from './Singin'


const WebbscyApp = () => (
    <Router>
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>

                    <LinkContainer to="/">
                        <NavItem>Home</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <NavItem>About</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/signin">
                        <NavItem>SingIn</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>


            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/signin" component={SingIn}/>
        </div>
    </Router>
)
export default WebbscyApp