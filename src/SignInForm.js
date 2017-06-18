import React from 'react'
import firebase from 'firebase'

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
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          e-mail:
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <br/>
          password:
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}
