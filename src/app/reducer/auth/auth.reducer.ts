import * as fromAuth from './auth.actions';
import { User } from 'src/app/model/auth';

export interface AuthState {
  user: User;
}

const initState: AuthState = {
<<<<<<< HEAD
  user: {
    names: 'Niver Daniel',
    surnames: 'Romero Manrique',
    document: '1090765466',
    password: '987654321',
    code: '1151157',
    email: 'niverdanielrm@ufps.edu.co',
    photo: '',
    role: 'vicerrector',
  },
=======

  user:{
    names:"Nier Daneil",
    surnames:"Romero Manrique",
    document:"1090765466",
    password:"987654321",
    code:"1151157",
    email:"niverdanielrm@ufps.edu.co",
    photo:"",
    role:"docente"  
  }
>>>>>>> 54d88c78c5214b34159b9948c187672e07f35ffc
};

export const authReducer = (
  state = initState,
  actions: fromAuth.actions
): AuthState => {
  switch (actions.type) {
    case fromAuth.ADD_USER:
      return {
        ...state,
        user: actions.user,
      };

    case fromAuth.REMOVE_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return {
        ...state,
      };
  }
};
