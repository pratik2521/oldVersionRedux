import {
  DEC,
  GET_ACC_FULFILLED,
  GET_ACC_PENDING,
  GET_ACC_REJECTED,
  INC,
  INC_BY_AMOUNT,
} from "../actions";

export function accountReducer(state = { amount: 1 }, action) {
  console.log("df");
  switch (action.type) {
    case GET_ACC_FULFILLED:
      return { amount: action.payload, pending: false, error: null };
    case GET_ACC_PENDING:
      return { ...state, pending: true, error: null };
    case GET_ACC_REJECTED:
      return { ...state, pending: false, error: action.error };
    case INC:
      return { amount: state.amount + 1, error: null };
    case DEC:
      return { amount: state.amount - 1, error: null };
    case INC_BY_AMOUNT:
      return { amount: state.amount + parseFloat(action.payload), error: null };

    default:
      return state;
  }
}
