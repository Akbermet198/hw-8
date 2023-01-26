import React from "react";
import styled from "styled-components";
import { Button } from "../UI/button/button";

export const Navigation = ({ logoutHandler, toggleBarVisibility }) => {
  // const [istimerStarted, setTimer] = useState(false);

  return (
    <nav>
      <Navlist>
        <li>
          <Button onClick={() => toggleBarVisibility(false)}>Users</Button>
        </li>
        <li>
          <Button onClick={() => toggleBarVisibility(true)}>Timer</Button>
        </li>
        <li>
          {" "}
          <Button onClick={logoutHandler}>Logout</Button>
        </li>
      </Navlist>
    </nav>
  );
};
const Navlist = styled.ul`
  list-style: none;
  display: flex;
  width: 400px;
  justify-content: space-around;
`;
