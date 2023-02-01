import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCatalogData } from "../API/getCatalogData";
import { getDetailedPageData } from "../API/getDetailedPageData";

const initialState = {
  items: [],
  item: [],
  searchedItems: [],
  loading: null,
  search: "",
};

export const fetchAllItems = createAsyncThunk(
  "items/fetchAllItems",
  async () => {
    const responce = await getCatalogData();
    return responce;
  }
);

export const fetchItemById = createAsyncThunk(
  "items/fetchItemById",
  async (id) => {
    const responce = await getDetailedPageData(id);
    return responce;
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSearchedItems: (state) => {
      state.searchedItems = [...state.items].filter(
        (i) => i.name === state.search
      );
    },
  },
  extraReducers: {
    [fetchAllItems.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchAllItems.fulfilled]: (state, action) => {
      state.loading = "resolved";
      state.items = action.payload;
    },
    [fetchItemById.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchItemById.fulfilled]: (state, action) => {
      state.loading = "resolved";
      state.item = action.payload;
    },
  },
});

// Destructure and export the plain action creators
export const { setSearch, setSearchedItems } = itemsSlice.actions;

export default itemsSlice.reducer;
