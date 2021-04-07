import { createReducer } from '@reduxjs/toolkit';
import { toggleModalAction } from './action';

export const modalReducer = createReducer(false, {
  [toggleModalAction]: (_, { payload }) => !payload,
});
