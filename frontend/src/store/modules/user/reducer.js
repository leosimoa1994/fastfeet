import produce from 'immer';

const INICIAL_STATE = {
  user: null,
};

export default function user(state = INICIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      default:
    }
  });
}
