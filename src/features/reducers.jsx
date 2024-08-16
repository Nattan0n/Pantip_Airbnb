// reducers.jsx

import { combineReducers } from '@reduxjs/toolkit';
import someFeatureReducer from './someFeatureSlice';
// เพิ่ม reducers ของคุณที่นี่

const rootReducer = combineReducers({
  someFeature: someFeatureReducer,
  // รวม reducers อื่นๆ
});

export default rootReducer;
