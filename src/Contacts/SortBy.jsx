import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "../App.css";

const SortBy = props => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      width: 100
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div className="SortBy">
      <FormControl
        size="small"
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.sortSelected}
          onChange={props.onChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="AtoZ">A - Z</MenuItem>
          <MenuItem value="ZtoA">Z - A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortBy;
