import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { primaryColor, secondaryColor, urlAbsences } from './variables.js';

document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    if (!calendarEl) { // If the calendar does not exist
        return;
    }

    let calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        initialDate: '2021-11-05',
        initialView: 'timeGridDay',
        slotMinTime: '07:00:00',
        slotMaxTime: '22:00:00',
        contentHeight: 'auto',
        editable: true,
        locales: [frLocale],
        locale: 'fr',
        eventBackgroundColor: primaryColor,
        eventBorderColor: secondaryColor,
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
                url: urlAbsences,
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
                url: urlAbsences,
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
                url: urlAbsences,
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
                url: urlAbsences,
                extendedProps: {
                    teacher: 'Rochat Claude, Zen-Ruffiner Xavier',
                    room: 'SC-C131'
                },
            }
        ],
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
