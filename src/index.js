import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App1 from './App1';


let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>

                <App1 />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
