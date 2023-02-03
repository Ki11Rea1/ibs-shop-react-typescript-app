import "./Header.scss";
import SearchInput from "./SearchInput";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <header className="header">
      <div className="search-field">
        <SearchIcon />
        <SearchInput />
      </div>
      <nav className="nav-icons">
        <ShoppingCartOutlinedIcon className="cart" />
        <AccountCircleOutlinedIcon className="account" />
      </nav>
    </header>
  );
};

export default Header;
