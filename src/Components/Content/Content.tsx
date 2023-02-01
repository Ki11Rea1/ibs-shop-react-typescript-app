import { Route, Routes } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import DetailedPage from "./Detailed/DetailedPage";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Catalog />} />
        <Route path="/item/:itemid" element={<DetailedPage />} />
      </Routes>
    </>
  );
};

export default Content;
