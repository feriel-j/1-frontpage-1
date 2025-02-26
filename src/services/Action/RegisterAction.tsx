import axios from "axios";
import { ADD_USER, ADD_USER_FAIL, ADD_USER_SUCCESS } from "../ActionTypes/registerActionType";
import { Dispatch } from 'redux';

// Define TypeScript type for User object
interface User {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
}

// adding user-------------------------------------------------
export const addUser = (user: User) => async (dispatch: Dispatch) => {
    dispatch({ type: ADD_USER });
    try {
      const result = await axios.post("/register-kwk-front-page", user);
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: result.data,
       
      });
      console.log(result.data);
    } catch (error) {
      dispatch({ type: ADD_USER_FAIL, payload: error });
      console.log(error);
    }
  };