import { Student } from './course';

export interface Title {
  title: String;
  subtitle: String;
}

export interface ItemRisk {
  icon: String;
  urlImg: String;
  items: String[];
}
export interface ActivitiesList {
  date: String;
  name: String;
  icon: String;
}
export interface StudentInDanger {
  student: Student;
  date: Date;
  postulatorRole: String;
}

export interface ServicesWellness {
  num: number;
  name: String;
  isActive: boolean;
}

export interface MenuOptions {
  path: String;
  icon: String;
  name: String;
  isAllowed: (role: String) => boolean;
}
