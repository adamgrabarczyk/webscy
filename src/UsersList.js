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
    }
render() {

            const userId = parseInt(this.props.match.params.userId, 10)
            const user = this.state.userslist.find(
                user => user.id === userId)
    return (
        <div>
            <h1>

                {' '}
                {
                    user ?
                        user.imie :
                        null
                }
            </h1>

        </div>
    )

        }





}

export default UsersList