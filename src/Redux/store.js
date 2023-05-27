import { legacy_createStore, combineReducers,compose ,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import TypeMasterReducer from "./TypeMaster/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({TypeMasterReducer})

 const store = legacy_createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;