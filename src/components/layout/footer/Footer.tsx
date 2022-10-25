import { styled } from "@stitches/react";
import { DotNavigation } from "./DotNavigation";
import { Spotify } from "./Spotify";

const StyledFooter = styled("footer", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const Footer = () => {
  return (
    <StyledFooter>
      <DotNavigation />
      <Spotify />
    </StyledFooter>
  );
};
export { Footer };
