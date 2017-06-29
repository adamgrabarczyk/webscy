import React from 'react'


class UsersList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        fetch(
            process.env.PUBLIC_URL + '/data/userlist.json'
        ).then(
            response => response.json()
        ).then(users => this.setState({
            users: users
        }))
    }

    render() {
        return (
            <div>
                <h3>Lista zalogowanych użytowników</h3>

                <ul>
                    {
                        this.state.users.map(
                            user => (
                                <li key={user.id}>{user.imie + ' ' + user.nazwisko}</li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default UsersList