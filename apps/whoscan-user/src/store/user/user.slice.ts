import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe, UserProfile } from "../../models";
import type { RootState } from "../store";

// Define a type for the slice state
interface UserState {
  profile: Maybe<UserProfile>;
  auth: Maybe<string>;
}

// Define the initial state using that type
const initialState: UserState = {
  profile: null,
  auth: null,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    delUser: (state) => {
      state.profile = null;
    },
    setAuth: (state, action: PayloadAction<string>) => {
      state.auth = action.payload;
    },
    delAuth: (state) => {
      state.auth = null;
    },
  },
});

export const { setUser, delUser, setAuth, delAuth } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserProfile = (state: RootState) => state.user.profile;

export const selectAuth = (state: RootState) => state.user.auth;

export default userSlice.reducer;
