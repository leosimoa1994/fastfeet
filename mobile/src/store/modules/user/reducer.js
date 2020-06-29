import produce from 'immer';

const INICIAL_STATE = {
  deliveryman: null,
};

export default function user(state = INICIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.deliveryman = null;
        break;
      }
      default:
    }
  });
}
