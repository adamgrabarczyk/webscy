import React from 'react'


class UsersList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userslist: []
        }

        fetch(
            process.env.PUBLIC_URL + '/userlist.json'
        ).then(
            response => response.json()
        ).then(
            userslist => this.setState({
                userslist: userslist
            })
        )

render() {


        }



    }

}

export default UsersList