import React from 'react'
import {Table, Jumbotron, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Filter from './Filter'

class Events extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            events: JSON.parse(localStorage.getItem('events')) || [],
            search: ''
        }

        this.searchUpdate = event => this.setState({
            search: event.target.value
        })

        if (this.state.events.length === 0) {
            fetch(
                process.env.PUBLIC_URL + '/data/events.json'
            ).then(
                response => response.json()
            ).then(
                events => this.setState({
                    events: events
                }, () => {
                    localStorage.setItem('events', JSON.stringify(this.state.events))
                })
            )


        }


    }

    render() {
return (

        <div>
            <h2>Calendar</h2>
            <Filter search={this.state.search}
            searchUpdate={this.searchUpdate}/>
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
                this.state.events.filter(
                    eventt => (
                        this.state.search === '' ?
                            true: eventt.Name.toLowerCase().includes(this.state.search.toLowerCase())
                    )




                ).map(
                    eventt => (
                        <tr key={eventt.id}>
                            <td> <Jumbotron>

                                <h2>{eventt.Name}</h2>
                                <p>{eventt.Type}</p>
                                <p><Button bsStyle="primary"><Link to={'/calendar/' + eventt.id}>Więcej</Link></Button></p>
                            </Jumbotron></td>
                            <td>{eventt.Town}</td>
                            <td>{eventt.Date}</td>
                            <td>{eventt.Type}</td>
                            {/*<td><Link to={'/calendar/' + eventt.id}>Więcej</Link></td>*/}
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