import { User } from './auth';

export interface Risk {
  name: String;
  path: String;
  description: String;
  icon: String;
}

export interface Postulation {
  _id?: any;
  student: User;
  postulator: User;
  date: Date;
  description: String;
  state?: String;
  isActive: boolean;
}
