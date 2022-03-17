import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logOutRequest = createAction('auth/logOutRequest');
export const logOutSuccess = createAction('auth/logOutSuccess');
export const logOutError = createAction('auth/logOutError');
