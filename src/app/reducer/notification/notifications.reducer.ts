import { state } from '@angular/animations';
import { formatCurrency } from '@angular/common';
import { ActionsSubject } from '@ngrx/store';
import { ResponseNotification } from 'src/app/model/notification';
import * as fromNotification from './notification.actions';

export interface NotificationState {
  notification: ResponseNotification[];
}
const initState: NotificationState = {
  notification: [],
};

export const notificationReducer = (
  state = initState,
  actions: fromNotification.actions
): NotificationState => {
  switch (actions.type) {
    case fromNotification.LOADING_NOTIFICATION:
      return {
        ...state,
        notification: actions.payload,
      };
    case fromNotification.DELETE_NOTIFICATIONS:
      return {
        ...state,
        notification: [],
      };
    case fromNotification.DELETE_NOTIFICATION:
      return {
        ...state,
        notification: state.notification.filter(
          ({ _id }) => _id.$oid !== actions.payload
        ),
      };
    default:
      return state;
  }
};
