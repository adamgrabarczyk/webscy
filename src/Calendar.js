import React from 'react'
import {Col, Grid, Table, Jumbotron, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Filter from './Filter'
import  {LinkContainer} from 'react-router-bootstrap'
import MyCalendar from './BigCalendar'
import FavoriteEvents from './FavoriteEvents'

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
    city_gdansk: eventt => eventt.Town === 'Gdańsk',
    city_gdynia: eventt => eventt.Town === 'Gdynia',
    city_sopot: eventt => eventt.Town === 'Sopot'

}


class Calendar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            events: JSON.parse(localStorage.getItem('events')) || [],
            search: '',
            activeFilter: [],
            filterByType: false,
            favoriteEventIds: []
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
            activeFilter: this.state.activeFilter.filter(
                type => {
                    const selectedPrefix = filterType.split('_')[0]
                    const currentPrefix = type.split('_')[0]
                    return selectedPrefix !== currentPrefix
                }
            ).concat(enabled === true ? filterType : [])
        })

        this.resetFilter = (prefix) => this.setState({
            activeFilter: this.state.activeFilter.filter(
                item => item.indexOf(prefix) !== 0
            ),


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
        console.log(this.props)
        return (
            <Grid>
                <div>
                    <div>
                        <MyCalendar events={this.state.events} history={this.props.history}/>
                        <FavoriteEvents events={this.state.events.filter(
                            event => this.state.favoriteEventIds.includes(event.id)
                        )}/>
                    </div>

                    <h2>Calendar</h2>
                    <Filter search={this.state.search}
                            searchUpdate={this.searchUpdate}
                            FilterUpdate={this.FilterUpdate}
                            activeFilter={this.state.activeFilter}
                            resetFilter={this.resetFilter}/>
                    <div>
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
                                    <Col xs={12} md={8}>
                                        <Jumbotron key={eventt.id}>

                                            <h2>{eventt.Name}</h2>
                                            <p>Lokalizacja:{eventt.Town}</p>
                                            <p>Kiedy:{eventt.Date}</p>
                                            <p>{eventt.Type}</p>
                                            <p><LinkContainer to={'/calendar/' + eventt.id}><Button onClick="" bsStyle="primary">Więcej</Button></LinkContainer>
                                            </p>
                                            <p> <button onClick={() => {
                                                this.setState({
                                                    favoriteEventIds: this.state.favoriteEventIds.filter(
                                                        id => id !== eventt.id
                                                    ).concat(eventt.id)
                                                })
                                            }}>+</button></p>
                                        </Jumbotron>
                                    </Col>

                                )
                            )
                        }
                    </div>


                </div>
            </Grid>
        )
    }
}

export default Calendar