import React from 'react'
import {Link} from 'react-router-dom'

const FavoriteEvents = props => (

    <span className="favorite">
        <h2 className="favs-tittle">Ulubione</h2>

        <ul>
            {
                props.events.map(
                    event =>({
                        ...event,
                        name: event.Name
                    })
                ).map(
                    event => <li className="favorite-event"><img onClick={() => props.remove(event.id)}
                                                                  src={"/Icon-remove.ico"}
                                                                  className="remove-btn"/>
                        <Link to={'/calendar/' + event.id}>{" " +event.name}</Link>
                       </li>
                )
            }

        </ul>
    </span>

);

export default FavoriteEvents
