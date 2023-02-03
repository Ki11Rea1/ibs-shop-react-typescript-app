import { NavLink } from "react-router-dom";
import { API_URL } from "../../../../API/constants";
import "./Item.scss";
import { ItemType } from "../../../../Utilities/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Item = ({ item }: { item: ItemType }) => {
  return (
    <NavLink to={`/item/${item.id}`} className="item">
      <div className="favorite">
        {item.like ? (
          <FavoriteIcon color="primary" />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </div>
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
