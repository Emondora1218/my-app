import { useEffect } from "react";

import { Routes, Link, HashRouter, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import TopPage from "./pages/TopPage";


const theme = createTheme({
  palette: {
    Accent: {
      main: "#8DA0C9",
      contrastText: "#f0f0f0",
    },
    Assort1: {
      main: "#1E2535",
      contrastText: "#f0f0f0",
    },
    Assort2: {
      main: "#3F4A67",
      contrastText: "#f0f0f0",
    },
    Base: {
      main: "#2C354E",
      contrastText: "#f0f0f0",
    },
    primary: {
      main: "#8DA0C9",
      contrastText: "#f0f0f0",
    },
    error: {
      main: "#FD5763",
      contrastText: "#f0f0f0",
    },
    success: {
      main: "#5A9369",
      contrastText: "#f0f0f0",
    },
    warning: {
      main: "#DAB000",
      contrastText: "#f0f0f0",
    },
    secondary: {
      main: "#f0f0f0",
      contrastText: "#999999",
    },
  },
});

const App = () => {
  useEffect(() => {
    // イベントの設定
    window.addEventListener("beforeunload", onUnload);

    return () => {
      // イベントの設定解除
      window.removeEventListener("beforeunload", onUnload);
    };
  });

  const onUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AppBar position="static" color="Accent">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Num-Picker
            </Typography>
            <Stack direction={"row"} spacing={4}>
              <Link to="/" style={linkStyle}>
                TOP
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box m={4}>
          <Routes>
            <Route path={`/`} element={<TopPage />} />
          </Routes>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, paddingTop:5 }}
            align="center"
          >
            &copy; さば
          </Typography>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
