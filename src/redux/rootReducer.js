import { combineReducers } from "redux";
import counterReducer from './counter.reducer';

//combiner plusieurs reducers dans un seul
const rootReducer = combineReducers({
    counter: counterReducer,
});
export default rootReducer;