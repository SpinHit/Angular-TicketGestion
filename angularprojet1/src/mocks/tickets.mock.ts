import { Ticket } from '../models/ticket';
import {STUDENTS_MOCKED} from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Lisbone',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: 'SI'
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: 'GE'
  },
];

const students = [
  { id: 0, name: "Perfect" },
  { id: 1, name: "Low" },
  { id: 2, name: "Minor" },
  { id: 3, name: "High" },
];