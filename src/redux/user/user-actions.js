import { createAction } from '@reduxjs/toolkit';

export const loginStart = createAction('contacts/LOGIN_START');
export const loginSuccess = createAction('contacts/LOGIN_SUCCESS');
export const loginError = createAction('contacts/LOGIN_ERROR');

export const signInStart = createAction('contacts/SIGNIN_START');
export const signInSuccess = createAction('contacts/SIGNIN_SUCCESS');
export const signInError = createAction('contacts/SIGNIN_ERROR');

export const signOutStart = createAction('users/SIGNOUT_START');
export const signOutSuccess = createAction('users/SIGNOUT_SUCCESS');
export const signOutError = createAction('users/SIGNOUT_ERROR');
