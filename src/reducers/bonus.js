import { INC_BONUS, INC_BY_AMOUNT } from "../actions";

export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INC_BONUS:
      return { points: state.points + 1 };

    case INC_BY_AMOUNT:
      if (action.payload >= 100) {
        return { points: state.points + 1 };
      }
    default:
      return state;
  }
}
