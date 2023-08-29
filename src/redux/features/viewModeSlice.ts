import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ViewModeType = "grid" | "table";

interface ViewState {
  mode: ViewModeType;
}

const initialState: ViewState = {
  mode: "table",
};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<ViewModeType>) => {
      state.mode = action.payload;
    },
  },
});

export const { setViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;
