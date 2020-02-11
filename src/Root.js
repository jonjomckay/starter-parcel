import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // Reducer map goes here
    }
});

const Root = () => (
    <Provider store={ store }>
        <div>
            Hello
        </div>
    </Provider>
);

export default Root;
