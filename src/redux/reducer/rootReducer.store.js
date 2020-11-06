import { combineReducers } from 'redux';
import { createStore } from 'redux';

import baiTapGameBauCua from './baiTapGameBauCua.reducer';

const rootReducer = combineReducers({
  baiTapGameBauCua,
});

export const store = createStore(rootReducer);
