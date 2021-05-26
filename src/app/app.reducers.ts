import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './reducer/ui/ui.reducer';

export interface AppState {
  ui: fromUI.UIState;
}

export const combineReducer: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
};
