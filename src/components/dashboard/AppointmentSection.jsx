import React, { useEffect, useState, useRef } from 'react';
import '../../styles/Calendar.css';
import { startOfWeek, addDays, isSameDay, format, parse } from 'date-fns';
import { appointments } from '../../data/appointments';
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

const today = new Date();
const weekStart = startOfWeek(today, { weekStartsOn: 1 });
const weekDates = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
const options = { year: 'numeric', month: 'long' };
const currentMonthString = today.toLocaleDateString('en-US', options);

const Calendar = () => {
    const parseDate = (dateStr) => parse(dateStr, 'dd/MM/yyyy', new Date());
    const todays_appointments = appointments.filter(app => isSameDay(parseDate(app.date), today));
    const [selectedAppointment, setSelectedAppointment] = useState(todays_appointments[0]);
    const appointmentRef = useRef(null);

    const nextSixDays = Array.from({ length: 6 }, (_, i) => addDays(today, i + 1));

    const handleSelect = (appointment) => {
        setSelectedAppointment(appointment);

        if (appointmentRef.current) {
            appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="calendar-container">
            <div className='month-text'>
                <h4>{currentMonthString}</h4>
                <div className='calendar-arrows'>
                    <span><RiArrowLeftFill /></span>
                    <span><RiArrowRightFill /></span>
                </div>
            </div>
            <div className="week-view">
                <div className="week-days">
                    {weekDates.map((date, i) => (
                        <div key={i} className={`day-column ${isSameDay(date, today) ? 'today' : ''}`}>
                            <div className="day-header">
                                <span>{format(date, 'EEE')}</span>
                                <span>{format(date, 'dd')}</span>
                            </div>
                            <div className="time-slots">
                                {appointments.filter(app => isSameDay(parseDate(app.date), date)).map((app, idx) => (
                                    <div
                                        className={`time-slot ${selectedAppointment === app ? 'highlight' : ''}`}
                                        key={idx}
                                        ref={selectedAppointment === app ? appointmentRef : null}
                                        onClick={() => handleSelect(app)}
                                    >
                                        {app.time.split('-')[0]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="appointments">
                {todays_appointments.map((app, i) => (
                    <div
                        key={i}
                        className={`appointment-card today-card ${selectedAppointment === app ? 'highlight' : ''}`}
                        onClick={() => handleSelect(app)}
                    >
                        <div className='event-heading'>
                         <span>{app.title}</span>   
                         <span>{app.emoji}</span>
                        </div>
                        <p>{app.time}</p>
                        <p>{app.doctor}</p>
                    </div>
                ))}

                <h2 className="upcoming-header">The Upcoming Schedule</h2>
                <div className="upcoming-schedule">
                    {nextSixDays.map((date) => {
                        const appointmentsForDay = appointments.filter(
                            (app) => isSameDay(parseDate(app.date), date)
                        );

                        if (appointmentsForDay.length === 0) return null;

                        return (
                            <div key={format(date, 'dd/MM/yyyy')}>
                                <h3>On {format(date, 'EEEE')}</h3>
                                <div className="upcoming-day">
                                    {appointmentsForDay.map((app) => (
                                        <div
                                            key={app.id}
                                            className={`appointment-card ${selectedAppointment === app ? 'highlight' : ''}`}
                                            onClick={() => handleSelect(app)}
                                        >
                                            <div className='event-heading'>
                                               <span>{app.title}</span>
                                               <span>{app.emoji}</span>
                                            </div>
                                            <p>{app.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
