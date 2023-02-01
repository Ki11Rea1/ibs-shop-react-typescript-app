import "./Header.css";
import AccountIcon from "./Icons/AccountIcon";
import CartIcon from "./Icons/CartIcon";
import SearchIcon from "./Icons/SearchIcon";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="header">
      <div className="search-field">
        <SearchIcon />
        <SearchInput />
      </div>
      <nav className="nav-icons">
        <CartIcon />
        <AccountIcon />
      </nav>
    </header>
  );
};

export default Header;
