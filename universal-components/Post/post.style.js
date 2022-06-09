import styled from "styled-components";

export const PostStyles = styled.div`
  color: ${({ Color, signature }) =>
    signature ? Color.TextColor : Color.PrimaryColor};
`;
