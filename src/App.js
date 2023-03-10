import "./App.css";
import Header from "./component/Header";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CompanyProfile from "./pages/CompanyProfile";
import { Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1519EA",
      main: "#0E119C",
      dark: "#090A60",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<CompanyProfile />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
