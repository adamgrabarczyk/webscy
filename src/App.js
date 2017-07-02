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
import Calendar from './Calendar'
import Event from './Event'
import UsersList from './UsersList'

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


export default class App extends React.Component {

  state = {
    user: null
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        })
      } else {
        this.setState({
          user: null
        })
      }
    });
  }

  render() {
    return (

      <Router>
        <div>
          <div>
            {
              this.state.user === null ?
                <Route path="/" component={Home}/> :
                <div>
                  <Navbar>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <a href="#"><img src="/logo.svg" alt="" className="nav-logo"/></a>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                      <Navbar.Collapse>
                        <Navbar.Text>
                          <LinkContainer to="/calendar">
                            <Navbar.Link><p>Kalendarz</p></Navbar.Link>
                          </LinkContainer>
                        </Navbar.Text>
                      </Navbar.Collapse>
                    </Nav>
                      <Nav>
                        <Navbar.Collapse>
                            <Navbar.Text>
                        <LinkContainer to="/UsersList">
                            <Navbar.Link></Navbar.Link>
                        </LinkContainer>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                    <Nav pullRight>
                      <NavItem>{this.state.user.email}</NavItem>
                      <NavItem onClick={() => firebase.auth().signOut()}> (Wyloguj)</NavItem>
                    </Nav>
                  </Navbar>

                  <Route exact path="/calendar" component={Calendar}/>
                  <Route path="/calendar/:eventtId" component={Event}/>
                  <Route path="/UsersList" component={UsersList}/>
                </div>
            }

          </div>
        </div>
      </Router>

    )
  }
}