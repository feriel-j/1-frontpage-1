import { combineReducers } from "redux";
import registerReducer from "./registerReducer";



export const rootReducer = combineReducers({
registerReducer,
});

export type State = ReturnType<typeof rootReducer>;