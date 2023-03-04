import { combineReducers } from "redux";
import { notifications } from "./notifications";
import { user } from "./user";

export const combineReducer = combineReducers({
        notifications,
        user,
    })