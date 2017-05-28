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
            events => console.log(events)
        )

    }
    render() {
return (

        <div>
            <h2>Calendar</h2>
        </div>
)}
    }

export default Events