import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react'
import {connect} from 'react-redux'

BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
    <div style={{height: 200}}>
        <BigCalendar
            events={[]}
            startAccessor='startDate'
            endAccessor='endDate'
        />
    </div>
);

export default MyCalendar