import * as fromUI from './ui.actions';

export interface UIState {
  loading: boolean;
  titleNavbar: String;
}

const initState: UIState = {
  loading: false,
  titleNavbar: 'SAT',
};

export const uiReducer = (
  state = initState,
  actions: fromUI.actions
): UIState => {
  switch (actions.type) {
    case fromUI.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case fromUI.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    case fromUI.SET_TITLE_NAVBAR:
      return {
        ...state,
        titleNavbar: actions.payload,
      };

    default:
      return state;
  }
};
