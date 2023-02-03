import Item from "./Item/Item";
import React, { useEffect } from "react";
import { fetchAllItems } from "../../../ReduxStore/ItemsSlice";
import { useAppDispatch, useAppSelector } from "../../../Hooks/hooks";
import { Stack } from "@mui/material";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.products.items);
  const searchedItems = useAppSelector((state) => state.products.searchedItems);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);
  return (
    <Stack
      direction={"row"}
      className="catalog"
      flexWrap={"wrap"}
      justifyContent={"center"}
      display={"flex"}
    >
      {(searchedItems.length ? searchedItems : items).map((i) => (
        <Item item={i} key={i.id} />
      ))}
    </Stack>
  );
};

export default Catalog;
