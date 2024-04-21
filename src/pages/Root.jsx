import { Outlet } from "react-router-dom";
import Appbar from "./mui Component/Appbar";
import UiDrawer from "./mui Component/ui-Drawer";
import { Box } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

//  localstorage && mode
const Root = () => {
  const [OurMenuo, setOurMenuo] = useState("none");
  const [DraerType, setDraerType] = useState("permanent");

  const [mode, setmyMode] = useState(
    localStorage.getItem("MyMode") === null
      ? "dark"
      : localStorage.getItem("MyMode") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            favColor: {
              main: grey[400],
            },
          }
        : {
            // palette values for dark mode
            favColor: {
              main: "#999",
            },
          }),
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Appbar {...{ drawerWidth, setOurMenuo, setDraerType }} />

        <UiDrawer
          {...{
            drawerWidth,
            setmyMode,
            OurMenuo,
            DraerType,
            setOurMenuo,
            setDraerType,
          }}
        />

        <Box
          sx={{
            ml: { md: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "120px",
          }}
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Root;
