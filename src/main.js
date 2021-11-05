import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import './main.css';

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    locales: [frLocale],
    locale: 'fr',
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'timeGridDay',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek'
    },
    slotMinTime: '07:00:00',
    slotMaxTime: '22:00:00'
  });

  const slotLabelOption = {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: false,
    meridiem: 'narrow',
    hour12: false
  };
  calendar.setOption('slotLabelFormat', slotLabelOption);

  calendar.render();
});
