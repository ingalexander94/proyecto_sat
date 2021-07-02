import { ResponseChat } from 'src/app/model/chat';
import * as fromChat from './chat.actions';

export interface ChatState {
  chat: ResponseChat[];
}
const initState: ChatState = {
  chat: [],
};

export const chatReducer = (
  state = initState,
  actions: fromChat.actions
): ChatState => {
  switch (actions.type) {
    case fromChat.LOADING_CHAT:
      return {
        ...state,
        chat: actions.payload,
      };

    case fromChat.DELETE_CHAT:
      return {
        ...state,
        chat: [],
      };

    default:
      return state;
  }
};
