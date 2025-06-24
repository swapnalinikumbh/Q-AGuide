import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header";
import PaginationList from "./components/PaginationList";
import Footer from "./components/Footer";
import reactData from "./data/reactData";
import jsData from "./data/data";
import reduxData from "./data/reduxData";
import htmlData from "./data/htmlData";
import cssData from "./data/cssData";
import jsPracticeData from "./data/jsPrcaticeData";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100vh",
            overflowX: "hidden",
          }}
        >
          <Header />

          <Box sx={{ px: 2, py: 2, flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/javascript" />} />
              {/* <Route
                path="/javascript"
                element={<PaginationList data={jsData} />}
              />
              <Route
                path="/reactjs"
                element={<PaginationList data={reactData} />}
              />
              <Route
                path="/redux"
                element={<PaginationList data={reduxData} />}
              />
              <Route
                path="/html"
                element={<PaginationList data={htmlData} />}
              />
              <Route path="/css" element={<PaginationList data={cssData} />} />
              <Route
                path="/jspractice"
                element={<PaginationList data={jsPracticeData} />}
              /> */}
              <Route
                path="/javascript"
                element={<PaginationList module="javascript" />}
              />
              <Route
                path="/reactjs"
                element={<PaginationList module="reactjs" />}
              />
              <Route
                path="/redux"
                element={<PaginationList module="redux" />}
              />
              <Route path="/html" element={<PaginationList module="html" />} />
              <Route path="/css" element={<PaginationList module="css" />} />
              <Route
                path="/jspractice"
                element={<PaginationList module="jspractice" />}
              />
              {/* <Route
                path="/reactpractice"
                element={<PaginationList module="reactpractice" />}
              /> */}
            </Routes>
          </Box>

          <Footer />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
