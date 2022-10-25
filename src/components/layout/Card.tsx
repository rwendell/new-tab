import { styled } from "@stitches/react"

const StyledCard = styled("div",{
    border: "1px solid red"
})

const Card = ({children}) => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}
export {Card}