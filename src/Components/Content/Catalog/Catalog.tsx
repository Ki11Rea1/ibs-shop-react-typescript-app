import Item from "./Item/Item";
import "./Catalog.css";
import React, { useEffect } from "react";
import { fetchAllItems } from "../../../ReduxStore/ItemsSlice";
import { useAppDispatch, useAppSelector } from "../../../Hooks/hooks";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.products.items);
  const searchedItems = useAppSelector((state) => state.products.searchedItems);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);
  return (
    <div className="catalog">
      {(searchedItems.length ? searchedItems : items).map((i) => (
        <Item item={i} key={i.id} />
      ))}
    </div>
  );
};

export default Catalog;
