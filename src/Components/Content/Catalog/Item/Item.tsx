import { NavLink } from "react-router-dom";
import { API_URL } from "../../../../API/constants";
import "./Item.scss";
import Liked from "./Icons/Liked";
import NotLiked from "./Icons/NotLiked";
import { ItemType } from "../../../../Utilities/types";

const Item = ({ item }: { item: ItemType }) => {
  return (
    <NavLink to={`/item/${item.id}`} className="item">
      <div className="favorite">{item.like ? <Liked /> : <NotLiked />}</div>
      <div className="info">
        <div className="photo">
          <img src={`${API_URL}${item.picture.path}`} alt={item.picture.alt} />
        </div>
        <p className="name">{item.name}</p>
        <p className="price">{`${item.price.value} ${item.price.currency}`}</p>
      </div>
    </NavLink>
  );
};

export default Item;
