import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/register";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Register />
    </ThemeProvider>
  );
};

export default App;
