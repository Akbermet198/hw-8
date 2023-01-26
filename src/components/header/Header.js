import React from "react";
import styled from "styled-components";
import { Navigation } from "./Nav";

export const Header = ({
  isAuthenticated,
  logoutHandler,
  toggleBarVisibility,
}) => {
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {isAuthenticated && (
        <Navigation
          logoutHandler={logoutHandler}
          toggleBarVisibility={toggleBarVisibility}
        />
      )}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  padding: 20px 20px;
  background-color: #9f379f;
  color: white;
  display: flex;
  justify-content: space-between;
`;
