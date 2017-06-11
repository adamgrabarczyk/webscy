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
import Event from './Event'


const WebbscyApp = () => (
    <Router>
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">GdańskEvents</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
               <Nav>
                <Navbar.Collapse>
                    <Navbar.Text>
                        <LinkContainer to="/">
                            <Navbar.Link>Logowanie</Navbar.Link>
                        </LinkContainer>
                    </Navbar.Text>
                    <Navbar.Text>
                        <LinkContainer to="/calendar">
                            <Navbar.Link>Kalendarz</Navbar.Link>
                        </LinkContainer>
                    </Navbar.Text>
                    <Navbar.Text>
                        <LinkContainer to="/signin">
                            <Navbar.Link>Samba</Navbar.Link>
                        </LinkContainer>
                    </Navbar.Text>
                </Navbar.Collapse>
               </Nav>
            </Navbar>


            <hr/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/calendar" component={Events}/>
            <Route path="/calendar/:eventtId" component={Event}/>
            <Route path="/signin" component={SingIn}/>
        </div>
    </Router>
)
export default WebbscyApp