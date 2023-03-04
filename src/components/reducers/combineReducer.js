import { combineReducers } from "redux";
import { notifications } from "./notifications";
import { user } from "./user";
import { resumes } from "./resumes";


export const combineReducer = combineReducers({
        notifications,
        user,
        resumes,
    })