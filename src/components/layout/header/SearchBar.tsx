import { useRef } from "react";
import { useSearchField } from "react-aria";
import { useSearchFieldState } from "react-stately";

const SearchBar = (props) => {
  const { label } = props;
  const state = useSearchFieldState(props);
  const ref = useRef(null);
  const { labelProps, inputProps } = useSearchField(props, state, ref);

  return (
    <>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </>
  );
}

export { SearchBar };
