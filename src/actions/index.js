import axios from "axios";

// Action name constants
export const INIT = "account/init";
export const INC = "account/increment";
export const DEC = "account/decrement";
export const INC_BY_AMOUNT = "account/incrementByAmount";
export const GET_ACC_PENDING = "account/getuser/pending";
export const GET_ACC_FULFILLED = "account/getuser/fulfilled";
export const GET_ACC_REJECTED = "account/getuser/rejected";
export const INC_BONUS = "bonus/increment";

/// Action creators
export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      console.log("d")
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:8080/account/${id}`);
      dispatch(getUserAccountFulfilled(data.amount));
    } catch (error) {
      console.log("error", error);
      dispatch(getUserAccountRejected(error.message));
    }
  };
}

export function getUserAccountPending() {
  return { type: GET_ACC_PENDING };
}

export function getUserAccountFulfilled(value) {
  return { type: GET_ACC_FULFILLED, payload: value };
}

export function getUserAccountRejected(error) {
  return { type: GET_ACC_REJECTED, error: error };
}

export function increment() {
  return { type: INC };
}

export function decrement() {
  return { type: DEC };
}

export function incrementByAmount(value) {
  return { type: INC_BY_AMOUNT, payload: value };
}

export function incrementBonus() {
  return { type: INC_BONUS };
}
