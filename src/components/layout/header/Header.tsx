import { styled } from "@stitches/react";
import { BinaryClock } from "./BinaryClock";
import ReactGithubCalendar from "react-github-calendar";
import { Greeting } from "./Greeting";
import { SearchBar } from "./SearchBar";

const StyledHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Header = () => (
  <StyledHeader>
    <BinaryClock />
    <div>
      <Greeting />
      <SearchBar
        onSubmit={(query: string) =>
          (window.location.href = `https://stackoverflow.com/search?q=${query}`)
        }
      />
    </div>
    <ReactGithubCalendar
      style={{ width: "500px" }}
      username="rwendell"
      hideTotalCount
      hideColorLegend
      showWeekdayLabels
      color={"#d3c6aa"}
    />
  </StyledHeader>
);
export { Header };
