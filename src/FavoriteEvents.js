import React from 'react'


const FavoriteEvents = props => (
    <div style={{height: 350}}>
        <h2>Ulubione</h2>
        <ul>
            {
                props.events.map(
                    event =>({
                        ...event,
                        name: event.Name
                    })
                ).map(
                    item => <li>{item.name}</li>
                )
            }

        </ul>
    </div>
);

export default FavoriteEvents
