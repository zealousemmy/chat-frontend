import { SearchDiv } from "./search-input";
import { FaSearch } from "react-icons/fa";
import { withTheme } from "styled-components";

const SearchInput = ({ theme: { Color }, placeholder }) => {
  return (
    <SearchDiv Color={Color}>
      <FaSearch />
      <input type={"text"} placeholder={placeholder} />
    </SearchDiv>
  );
};

export default withTheme(SearchInput);
