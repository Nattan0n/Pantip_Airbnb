import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // กำหนด state เริ่มต้นของ feature นี้
};

const someFeatureSlice = createSlice({
  name: 'someFeature',
  initialState,
  reducers: {
    // ใส่ reducers ของคุณที่นี่
    exampleAction: (state, action) => {
      // ตัวอย่าง reducer
    },
  },
});

export const { exampleAction } = someFeatureSlice.actions;
export default someFeatureSlice.reducer;
