import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Hooks/hooks";
import { setSearch, setSearchedItems } from "../../ReduxStore/ItemsSlice";
import useDebounce from "../../Utilities/debounce";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 1000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearch(debouncedInputValue));
    dispatch(setSearchedItems());
  }, [debouncedInputValue]);
  return (
    <input
      value={inputValue}
      className="search-input"
      placeholder="Search products"
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
