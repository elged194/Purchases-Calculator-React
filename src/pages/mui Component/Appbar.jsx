import { Notes } from "@mui/icons-material";
import {
  Avatar,
  Link,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";

const Appbar = ({ drawerWidth , setOurMenuo , setDraerType}) => {
  return (
    <AppBar
    component={"header"}
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, md: `${drawerWidth}px` },
      }}
      // color="transparent"
    >
      <Toolbar>
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            me: "5px",
            mt: "9px",
            p: "5px",
          }}
          onClick={() => {
            setOurMenuo("block")
            setDraerType("temporary")
          }}
        >
          <Notes />
        </IconButton>

        <Link
          color="inherit"
          variant="h6"
          sx={{ flexGrow: 1 }}
          underline="none"
          href="/"
        >
          My Purchases
        </Link>

        <Typography variant="body1" color="inherit" mr={1}>
          Hussein Elged
        </Typography>

        <Avatar alt="Remy Sharp" src="imgs\me.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
