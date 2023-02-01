import Item from "./Item/Item";
import "./Catalog.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "../../../ReduxStore/ItemsSlice";

const Catalog = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const searchedItems = useSelector((state) => state.products.searchedItems);

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
