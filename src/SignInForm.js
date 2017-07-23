import React from 'react'
import firebase from 'firebase'
import  {browserHistory} from 'react-router-dom';

export default class SignInForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    //console.log(this.state.email, this.state.password)
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(

      data => console.log('data: ', data)
    ).catch(
      error => console.log('error: ', error)
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>e-mail<br /></div>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <br/>
          <div>hasło<br /></div>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <br /><br />
          <button type="submit">zaloguj się</button>
          <br /><br />
        </form>
      </div>
  )
  }
  }
