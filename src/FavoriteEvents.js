import React from 'react'
import {Link} from 'react-router-dom'

const FavoriteEvents = props => (
    <div style={{}} className="favorite">
        <h2>Ulubione</h2>

        <ul>
            {
                props.events.map(
                    event =>({
                        ...event,
                        name: event.Name
                    })
                ).map(
                    event => <li className="favorite-event"><Link to={'/calendar/' + event.id}>{event.name}</Link><button onClick={() => props.remove(event.id)}>-</button> </li>
                )
            }

        </ul>
    </div>
);

export default FavoriteEvents
