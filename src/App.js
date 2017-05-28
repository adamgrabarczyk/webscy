    import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Nav, Navbar, NavItem,
} from 'react-bootstrap'


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
                         <NavItem  href="/">Home</NavItem>
                            <NavItem  href="/about">About</NavItem>
                            <NavItem  href="/singin">SingIn</NavItem>
                        </Nav>
                      </Navbar>



            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
           <Route path="/singin" component={SingIn}/>
        </div>
    </Router>
)
export default WebbscyApp