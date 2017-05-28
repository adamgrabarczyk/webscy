import React from 'react'


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
            <ul>
                {
                    this.state.events.map(
                        eventt => (
                            <li key={eventt.id}>{eventt.Name}</li>
                        )
                    )
                }
            </ul>
        </div>
)}
    }

export default Events