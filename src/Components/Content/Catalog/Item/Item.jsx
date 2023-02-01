import { NavLink } from "react-router-dom";
import { API_URL } from "../../../../API/constants";
import "./Item.css";
import Liked from "./Icons/Liked";
import NotLiked from "./Icons/NotLiked";

const Item = (props) => {
  return (
    <NavLink to={`/item/${props.item.id}`} className="item">
      <div className="item__favorite">
        {props.item.like ? <Liked /> : <NotLiked />}
      </div>
      <div className="item__info">
        <div className="item__photo">
          <img
            src={`${API_URL}${props.item.picture.path}`}
            alt={props.item.picture.alt}
          />
        </div>
        <p className="item__name">{props.item.name}</p>
        <p className="item__price">
          {`${props.item.price.value} ${props.item.price.currency}`}
        </p>
      </div>
    </NavLink>
  );
};

export default Item;
