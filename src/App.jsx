import { useState } from "react";
import "./App.css";
import { Box} from "@mui/material";
import Header from "./components/Header";
import PaginationList from "./components/PaginationList";
import Footer from "./components/Footer";
import reactData from "./data/reactData";
import jsData from "./data/data";
import reduxData from "./data/reduxData";
import htmlData from "./data/htmlData";
import cssData from "./data/cssData";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter>
      <Box sx={{ width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
        <Header />
        <Box sx={{ px: 2, py: 2 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/javascript" />} />
            <Route path="/reactjs" element={<PaginationList data={reactData} />} />
            <Route path="/javascript" element={<PaginationList data={jsData} />} />
            <Route path="/redux" element={<PaginationList data={reduxData} />} />
            <Route path="/html" element={<PaginationList data={htmlData} />} />
            <Route path="/css" element={<PaginationList data={cssData} />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
    
    </>
  );
}

export default App;
