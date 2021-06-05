import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './reducer/ui/ui.reducer';
import * as fromAuth from './reducer/auth/auth.reducer';

export interface AppState {
  ui: fromUI.UIState;
  auth: fromAuth.AuthState;
}

export const combineReducer: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer,
};
