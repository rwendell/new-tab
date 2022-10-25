import { styled } from "@stitches/react";
import { NavLink } from "react-router-dom";

const StyledNavigationContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
});

// TODO Style NavLinks
// NavLinks can be used with the active class to select them and apply styles (https://reactrouter.com/en/main/components/nav-link)

const DotNavigation = () => {
  return (
    <StyledNavigationContainer>
      <NavLink to="/1">1</NavLink>
      <NavLink to="/2">2</NavLink>
      <NavLink to="/3">3</NavLink>
    </StyledNavigationContainer>
  );
};
export { DotNavigation };
