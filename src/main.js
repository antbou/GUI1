import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import './main.css';
import '@fortawesome/fontawesome-free/js/all';

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin],
    initialDate: '2021-11-05',
    initialView: 'timeGridDay',
    slotMinTime: '07:00:00',
    slotMaxTime: '22:00:00',
    contentHeight: 'auto',
    editable: true,
    locales: [frLocale],
    locale: 'fr',
    eventBackgroundColor: '#00a651',
    eventBorderColor: '#009933',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek'
    },
    events: [
      {
        id: '1',
        title: 'GPR1',
        start: '2021-11-05T08:00:00',
        end: '2021-11-05T09:35:00',
        extendedProps: {
          teacher: 'Glassey Nicolas',
          room: 'SC-C332'
        },
      },
      {
        id: '2',
        title: 'MAW 1.1 - E-Commerce',
        start: '2021-11-05T09:50:00',
        end: '2021-11-05T12:15:00',
        extendedProps: {
          teacher: 'Glassey Nicolas',
          room: 'SC-C332'
        },
      },
      {
        id: '3',
        title: 'CLD1',
        start: '2021-11-05T13:30:00',
        end: '2021-11-05T15:05:00',
        extendedProps: {
          teacher: 'Hurni Pascal',
          room: 'SC-C332'
        },
      },
      {
        id: '4',
        title: 'Rattrapages - Te - Retenues',
        start: '2021-11-05T15:20:00',
        end: '2021-11-05T16:55:00',
        extendedProps: {
          teacher: 'Rochat Claude, Zen-Ruffiner Xavier',
          room: 'SC-C131'
        },
      }
    ],
    eventDidMount: function (info) { // Adds 2 more fields (teacher and room)

      let teacher = document.createElement('i');
      teacher.textContent = info.event.extendedProps.teacher;
      teacher.className = 'extendedProps'

      let room = document.createElement('i');
      room.textContent = info.event.extendedProps.room;
      room.className = 'extendedProps'

      let element = info.el.querySelector('.fc-event-title');
      element.setAttribute('data-id', info.event.id);

      element.after(teacher);
      teacher.after(room);
      room.before(document.createElement('br'))

    },
    eventClassNames: function (arg) { // hides or displays additional fields depending on the view

      let element = document.querySelector('div[data-id="' + arg.event.id + '"]');

      if (!element) {
        return;
      }

      let extendedProps = element.parentElement.querySelectorAll('.extendedProps');

      if (arg.view.type == 'timeGridWeek') {
        extendedProps.forEach(function (params) {
          params.style.display = 'none'
        })
      } else {
        extendedProps.forEach(function (params) {
          params.style.display = ''
        })
      }
    }
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

let checkbox = document.querySelector("input[name=Hamburger]");

checkbox.addEventListener('change', function () { // Shows or hides the "section" depending on the hamberger input
  let section = document.querySelector("section");
  if (this.checked) {
    (section.classList.contains('section')) ? section.classList.remove('section') : false;
    (section.classList.contains('hidden')) ? true : section.classList.add('hidden');
  } else {
    (section.classList.contains('hidden')) ? section.classList.remove('hidden') : false;
    (section.classList.contains('section')) ? true : section.classList.add('section');
  }
});
