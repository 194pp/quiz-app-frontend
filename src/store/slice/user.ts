import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";

type TUserSlice = {
  email: string;
};

const initialState: TUserSlice = {
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = userSlice.actions;
export default userSlice.reducer;
