import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  //   registerRequest,
  registerSuccess,
  registerError,
  //   loginRequest,
  loginSuccess,
  loginError,
  //   logoutRequest,
  //   logoutSuccess,
  //   logoutError,
  //   getCurrUserRequest,
  //   getCurrUserSuccess,
  //   getCurrUserError,
} from "./auth-actions";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  //   [fetchContactsRequest]: () => true,
  //   [fetchContactsSuccess]: () => false,
  //   [fetchContactsError]: () => false,
  //   [addContactRequest]: () => true,
  //   [addContactSuccess]: () => false,
  //   [addContactError]: () => false,
  //   [deleteContactRequest]: () => true,
  //   [deleteContactSuccess]: () => false,
  //   [deleteContactError]: () => false,
});

export default combineReducers({ user, token, error, loading });
