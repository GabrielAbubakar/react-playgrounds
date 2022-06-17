import { createStore } from 'redux'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './redux/reducers/userSlice'




const persistConfig = {
    key: 'todos',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer)
export default store
