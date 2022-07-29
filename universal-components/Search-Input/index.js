import { SearchDiv } from "./search-input";
import { FaSearch } from "react-icons/fa";
import { withTheme } from "styled-components";

const SearchInput = ({ theme: { Color }, placeholder, isDisabled }) => {
  return (
    <SearchDiv Color={Color}>
      <FaSearch />
      <input type={"text"} placeholder={placeholder} disabled={isDisabled} />
    </SearchDiv>
  );
};

export default withTheme(SearchInput);
