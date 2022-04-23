import {Injectable} from '@angular/core';
import {Student} from '../../models/student';
import {BehaviorSubject} from 'rxjs';
import {STUDENTS_MOCKED} from '../../mocks/students.mock';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private listStudent: Student[] = STUDENTS_MOCKED;

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.listStudent);

  constructor() {

  }
}