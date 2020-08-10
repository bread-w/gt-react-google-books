import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Google Books Search
            </Typography>
            <Typography variant="h6" className={classes.title} style={{color: "whitesmoke"}}>
              <Link to="/BookSearch">
                <Button style={{color: "whitesmoke"}}>Search Books</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/SavedBooks">
                <Button style={{color: "whitesmoke"}}>View Saved Books</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
