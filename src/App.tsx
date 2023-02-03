import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import theme from "./Styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
