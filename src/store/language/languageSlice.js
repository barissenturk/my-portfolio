import { createSlice } from "@reduxjs/toolkit";

const savedLang = localStorage.getItem("lang");

const initialState = {
  lang: savedLang ? JSON.parse(savedLang) : "tr",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", JSON.stringify(action.payload));
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
