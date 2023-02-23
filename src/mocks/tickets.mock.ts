import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI6 in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'GE',
    archived: true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'SI',
    archived: true
  },
];
