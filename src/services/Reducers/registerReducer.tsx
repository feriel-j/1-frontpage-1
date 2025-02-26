import { AnyAction } from "redux";
import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
} from "../ActionTypes/registerActionType";

const initialState = {
  user: {},
  isLoading: false,
  isSuccess: false,
  error: null,
};

const registerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    //SIGN UP--------------------------------------
    case ADD_USER:
      return { ...state, isLoading: true, isSuccess: false, error: null };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSuccess: true,
        error: null,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action?.payload?.response?.data.message,
      };

    default:
      return state;
  }
};

export default registerReducer;
