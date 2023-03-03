import "./App.css";
import Header from "./component/Header";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CompanyProfile from "./pages/CompanyProfile";

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
        <Header />
        <CompanyProfile />
      </Box>
    </ThemeProvider>
  );
}

export default App;
