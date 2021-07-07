import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contacts-reducer";
import authReducer from "./auth/auth-reducer";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  middleware,
});

export default store;
