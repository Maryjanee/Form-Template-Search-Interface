import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../src/reducers/";

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
