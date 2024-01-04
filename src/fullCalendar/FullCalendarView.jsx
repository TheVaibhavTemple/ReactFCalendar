import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridDay from '@fullcalendar/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {RESOURCES, EVENTS, LICENSEKEY} from './demoData/demoData-utils';

function FullCalendarView() {
    const [view, setView] = useState('resourceTimeGridPlugin');

    return (
      <FullCalendar
        schedulerLicenseKey={LICENSEKEY}
        plugins={[resourceTimeGridPlugin, interactionPlugin]}
        initialView='resourceTimeGridDay'
        slotMinTime='10:00:00'
        slotMaxTime='22:00:00'
        aspectRatio='3.5'
        nowIndicator={true}
        allDaySlot={false}
        resources={RESOURCES}
        editable= {true}
        events= {EVENTS}
        slotDuration= "01:00:00"
        snapDuration= "00:01:00"
        weekends={true}  
        // direction= "ltr"
        // displayEventTime={false}  
        // displayEventEnd= {false}
        // eventOverlap= {false}
        eventBackgroundColor= "red"
        eventBorderColor= "black"
        eventTextColor= "yellow"
        eventColor= "green"
        rerenderDelay= "10"
        eventClick= {function(){console.log("eventClick")}}
        eventMouseEnter= {function(){console.log("eventMouseEnter")}}
        eventMouseLeave= {function(){console.log("eventMouseLeave")}}
        dateClick= {function(){alert("dateClick")}}
      />
    );
  }
  
  export default FullCalendarView