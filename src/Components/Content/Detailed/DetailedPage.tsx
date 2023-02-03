import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { API_URL } from "../../../API/constants";
import { useAppDispatch, useAppSelector } from "../../../Hooks/hooks";
import { fetchItemById } from "../../../ReduxStore/ItemsSlice";
import { ItemType } from "../../../Utilities/types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Button from "@mui/material/Button";
import "./DetailedPage.scss";

const DetailedPage = () => {
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => state.products.item as ItemType);

  useEffect(() => {
    dispatch(fetchItemById(id as string));
  }, [dispatch]);

  if (Object.keys(item).length === 0) {
    return null;
  }

  return (
    <div className="details">
      <div className="photo">
        <img src={API_URL + item.picture.path} alt={item.picture.alt} />
      </div>
      <div className="info">
        <p className="title">{item.name}</p>
        <p className="info__description">{item.description}</p>
        <p className="subtitle">Details</p>
        <p className="description">{item.details}</p>
        <div className="price">
          <p className="summ">{item.price.value + " " + item.price.currency}</p>
          <div className="count">
            <div className="differ">-</div>
            <div className="ammount">1</div>
            <div className="differ">+</div>
          </div>
          <Button variant="contained">Add to cart</Button>
          <FavoriteBorderOutlinedIcon className="favorite" />
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
