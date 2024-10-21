import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../services/ProfileService";
import { message } from "antd";

// Thunk untuk mengambil data (Read)
export const fetchProfile = createAsyncThunk(
  "profile/fetch",
  async () => {
    return getProfile();
  }
);

const profileReducer = createSlice({
  name: "profile",
  initialState: {
    profileItems: [],
    status: "idle",
    error: null,
  },
  reducers: {
    changeStatus: (state) => {
      state.status = "idle";
    },
    logOut: (state) => {
      state.profileItems = [];
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
        message.error(action.error.message);
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.error = null;
        state.profileItems = action.payload;
      });
  },
});

export const { changeStatus, logOut } = profileReducer.actions
export default profileReducer.reducer;
