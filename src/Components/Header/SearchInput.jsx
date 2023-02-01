import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, setSearchedItems } from "../../ReduxStore/ItemsSlice";
import useDebounce from "../../Utilities/debounce";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const debouncedInputValue = useDebounce(inputValue, 1000);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearch(debouncedInputValue));
    dispatch(setSearchedItems());
  }, [debouncedInputValue]);
  return (
    <input
      value={inputValue}
      className="search-field__search-input"
      placeholder="Search products"
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
