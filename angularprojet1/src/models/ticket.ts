import { Student } from "./student";

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  IDStudent?: number;
  student?: Student;
  major?: string;
  archived?: boolean;
}
