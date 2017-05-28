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
import Events from './Calendar'
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
                        <NavItem>Logowanie</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/calendar">
                        <NavItem>Kalendarz</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/signin">
                        <NavItem>Samba</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>


            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/calendar" component={Events}/>
            <Route path="/signin" component={SingIn}/>
        </div>
    </Router>
)
export default WebbscyApp