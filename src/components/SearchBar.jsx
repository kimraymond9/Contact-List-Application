import React from "react";
import TextField from '@material-ui/core/TextField';

const SearchBar = (props) => {
  return (
    <form noValidate autoComplete="off">
      <>
        <TextField id="outlined-search" fullWidth={true} onChange={props.onChange} label="Search" type="search" variant="outlined" />
      </>
    </form>
  )
}

export default SearchBar;