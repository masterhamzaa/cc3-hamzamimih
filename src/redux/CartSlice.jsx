import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts = createAsyncThunk("users/getCarts", async () => {
  const req = await axios.get("https://dummyjson.com/carts");
  return req.data;
});

const CartSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarts.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getCarts.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload.carts;
        state.loading = "idle";
      }
    });
    builder.addCase(getCarts.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default CartSlice.reducer;
