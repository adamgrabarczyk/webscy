import React from 'react'
import {Table} from 'react-bootstrap'


class Events extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            events: []
        }


        fetch(
            process.env.PUBLIC_URL + '/data/events.json'
        ).then(
            response => response.json()
        ).then(
            events => this.setState({
                events: events
            })
        )

    }
    render() {
return (

        <div>
            <h2>Calendar</h2>
            <Table>
            <thead>
            <tr>
                <th>Wydarzenia</th>
                <th>Miasto</th>
                <th>Data</th>
                <th>Kategoria</th>
            </tr>
            </thead>
            <tbody>
            {
                this.state.events.map(
                    eventt => (
                        <tr key={eventt.id}>
                            <td>{eventt.Name}</td>
                            <td>{eventt.Town}</td>
                            <td>{eventt.Date}</td>
                            <td>{eventt.Type}</td>
                        </tr>
                    )
                )
            }
            </tbody>
                  </Table>

        </div>
)}
    }

export default Events