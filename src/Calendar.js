import React from 'react'
import {Table, Jumbotron, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Filter from './Filter'

const filters = {
    word: (eventt, search) => [

        eventt.Name
    ].map(
        word => word.toLowerCase()
    ).some(
        word => word.includes(
            search.toLowerCase()
        )
    ),
    type_kino: eventt => eventt.Type === 'Kino',
    type_koncert: eventt => eventt.Type === 'Koncert',
    type_kultura: eventt => eventt.Type === 'Kultura',
    type_clubbing: eventt => eventt.Type === 'Clubbing',
    type_sport: eventt => eventt.Type === 'Sport',
    city_gdańsk: eventt => eventt.Town === 'Gdańsk'
}


class Events extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            events: JSON.parse(localStorage.getItem('events')) || [],
            search: '',
            activeFilter: [],
            filterByType: false
        }

        this.searchUpdate = event => this.setState({
            search: event.target.value
        },

            () => this.setState({
                activeFilter: this.state.activeFilter.filter(
                    word => word !== 'word'
                ).concat(this.state.search === '' ? [] : 'word')
            }))

this.FilterUpdate = (filterType, enabled) => this.setState({
    activeFilter:this.state.activeFilter.filter(
        type => {
            const selectedPrefix = filterType.split('_')[0]
            const currentPrefix = type.split('_')[0]
            return selectedPrefix !== currentPrefix
        }
    ).concat(enabled === true ? filterType : [])
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
            searchUpdate={this.searchUpdate}
            FilterUpdate={this.FilterUpdate}/>
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

                        this.state.activeFilter.map(
                            filaterName => filters[filaterName]
                        ).every(
                            func => func(eventt, this.state.search)
                        )
                    )



                ).map(
                    eventt => (
                        <tr key={eventt.id}>
                            <td> <Jumbotron>

                                <h2>{eventt.Name}</h2>
                                <p>{eventt.Type}</p>
                                <p><Button onClick="" bsStyle="primary"><Link to={'/calendar/' + eventt.id}>Więcej</Link></Button></p>
                            </Jumbotron></td>
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