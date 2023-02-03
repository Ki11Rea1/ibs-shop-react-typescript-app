import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
