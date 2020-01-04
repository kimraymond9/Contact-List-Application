import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import "../App.css";

const SearchBar = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <div className="SearchBar">
      <TextField
        size="small"
        fullWidth
        className={classes.root}
        id="outlined-search"
        onChange={props.onChange}
        label="Search"
        type="search"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    </div>
  );
};

export default SearchBar;
