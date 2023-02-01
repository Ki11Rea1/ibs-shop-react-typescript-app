import { ItemsState, ItemType } from "./../Utilities/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCatalogData } from "../API/getCatalogData";
import { getDetailedPageData } from "../API/getDetailedPageData";

const initialState: ItemsState = {
  items: [],
  item: [],
  searchedItems: [],
  loading: "idle",
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
  async (id: string) => {
    const responce = await getDetailedPageData(id);
    return responce;
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSearchedItems: (state) => {
      state.searchedItems = [...state.items].filter(
        (i) => i.name === state.search
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllItems.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(
      fetchAllItems.fulfilled,
      (state, action: PayloadAction<ItemType[]>) => {
        state.loading = "resolved";
        state.items = action.payload;
      }
    );
    builder.addCase(fetchItemById.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(
      fetchItemById.fulfilled,
      (state, action: PayloadAction<ItemType>) => {
        state.loading = "resolved";
        state.item = action.payload;
      }
    );
  },
});

// Destructure and export the plain action creators
export const { setSearch, setSearchedItems } = itemsSlice.actions;

export default itemsSlice.reducer;
