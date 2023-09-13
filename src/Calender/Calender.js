import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import holidays from './holiday';
const localizer = momentLocalizer(moment);


const HolidayCalendar = () => {
    const [events, setEvents] = useState(localStorage.getItem("EventData") && JSON.parse(localStorage.getItem("EventData")).length > 0 ? JSON.parse(localStorage.getItem("EventData")) : [...holidays])


    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };


    useEffect(() => {
        localStorage.setItem("EventData", JSON.stringify(events))
    }, [events])

    return (
        <div className="holiday-calendar">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                views={['month']}
                style={{ height: 500 }}
                onSelectEvent={(e) => alert("It is celebrated in " + e.state + ".")}

                selectable={true}
                onSelectSlot={(slotInfo) => {
                    const title = window.prompt('Event name:');
                    const state = window.prompt("States celebrated:");
                    if (title) {
                        const newEvent = {
                            id: events.length + 1,
                            title,
                            start: slotInfo.start,
                            end: slotInfo.end,
                            state
                        };
                        handleAddEvent(newEvent);
                    }
                }}
            />
        </div>
    );
};

export default HolidayCalendar;
