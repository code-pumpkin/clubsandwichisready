import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const Schedule = () => {
  // Mock data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Driving Lesson - John Doe',
      start: new Date(2023, 3, 15, 10, 0),
      end: new Date(2023, 3, 15, 11, 30),
    },
    {
      id: 2,
      title: 'Driving Test - Jane Smith',
      start: new Date(2023, 3, 16, 14, 0),
      end: new Date(2023, 3, 16, 15, 30),
    },
    // Add more mock events as needed
  ]);

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('Enter a title for the new event:');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleSelectEvent = (event) => {
    window.alert(event.title);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Schedule</h1>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable
        />
      </div>
    </div>
  );
};

export default Schedule;