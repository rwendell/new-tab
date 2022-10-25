import { styled } from "@stitches/react";
import { Card } from "./Card";

const StyledCardContainer = styled("main", {
    display: "flex",
    justifyContent: "space-around",
})

// @ts-ignore
const CardContainer = ({children}) => {
  return (
    <StyledCardContainer>
        {children}
    </StyledCardContainer>
  )
}
export {CardContainer}