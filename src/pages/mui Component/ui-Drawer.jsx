import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  IconButton,
  Box,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const UiDrawer = ({
  drawerWidth,
  setmyMode,
  OurMenuo,
  DraerType,
  setOurMenuo,
  setDraerType,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const myListDrawer = [
    { id: "1", title: "Home", icon: <Home />, path: "/" },
    { id: "2", title: "Create", icon: <Create />, path: "/Create" },
    { id: "3", title: "Profile", icon: <Person />, path: "/Profile" },
    { id: "4", title: "Settings", icon: <Settings />, path: "/Settings" },
    { id: "5", title: "Logout", icon: <Logout />, path: "" },
  ];

  return (
    <Drawer
      component={"nav"}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        display: { xs: OurMenuo, md: "block" },
      }}
      variant={DraerType}
      anchor="left"
      open={true}
      onClose={() => {
        setDraerType("permanent");
        setOurMenuo("none");
      }}
    >
      {/* Dark Mode */}
      <Box sx={{ m: "12px auto" }}>
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "MyMode",
              theme.palette.mode === "light" ? "dark" : "light"
            );
            setmyMode(theme.palette.mode === "light" ? "dark" : "light");
          }}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>

      <Divider />

      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {/* ---------------------------- */}
        {myListDrawer.map((e) => {
          return (
            <ListItemButton
              onClick={() => navigate(e.path)}
              sx={{
                backgroundColor: location.pathname === e.path ? "#999" : null,
              }}
              key={e.id}
            >
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.title} />
            </ListItemButton>
          );
        })}
        {/* ---------------------------- */}
      </List>

      <Divider />
    </Drawer>
  );
};

export default UiDrawer;
