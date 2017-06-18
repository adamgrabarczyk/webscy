import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Nav, Navbar, NavItem,
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import firebase from 'firebase'

import Home from './Home'
import Events from './Calendar'
import Event from './Event'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBnxUTHBH4BQymDUZWRcwJeKVdZ6lNueWk",
  authDomain: "jfdz4-webscy-app.firebaseapp.com",
  databaseURL: "https://jfdz4-webscy-app.firebaseio.com",
  projectId: "jfdz4-webscy-app",
  storageBucket: "jfdz4-webscy-app.appspot.com",
  messagingSenderId: "698642858395"
};
firebase.initializeApp(config);


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
                </Navbar.Collapse>
               </Nav>
            </Navbar>


            <hr/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/calendar" component={Events}/>
            <Route path="/calendar/:eventtId" component={Event}/>
        </div>
    </Router>
)
export default WebbscyApp