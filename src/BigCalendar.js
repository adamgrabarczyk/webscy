import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react'
import {connect} from 'react-redux'

BigCalendar.momentLocalizer(moment);
moment.locale("pl");

const MyCalendar = props => (
    <div style={{height: 200}}>
        <BigCalendar
            events={[]}
            startAccessor='startDate'
            endAccessor='endDate'
            messages={{
                today: 'Bieżący miesiąc',
                previous: '<',
                next: '>',
                month: 'miesiąc',
                week: 'tydzień',
                day: 'dzień'
            }}
            views={['month', 'week', 'day']}
        />
    </div>
);

export default MyCalendar