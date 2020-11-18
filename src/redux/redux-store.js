import { createStore, combineReducers } from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import catalogReduser from "./catalog-reducer";
import usersReduser from "./users-reducer";

let reducers = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser,
    catalog: catalogReduser,
    usersPage: usersReduser,
});

let store = createStore(reducers);

export default store;
