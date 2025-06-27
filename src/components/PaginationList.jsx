import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import allData from "../data/allData"; // 👉 Create this as explained below

import {
  Pagination,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  InputBase,
  IconButton,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import jsdata from "../data/data";
import reactData from "../data/reactData";
import reduxData from "../data/reduxData";
import htmlData from "../data/htmlData";
import cssData from "../data/cssData";
import jsPracticeData from "../data/jsPrcaticeData";
import reactPracticeData from "../data/reactPracticeData";

SyntaxHighlighter.registerLanguage("javascript", js);

const datasetMap = {
  javascript: jsdata,
  reactjs: reactData,
  redux: reduxData,
  html: htmlData,
  css: cssData,
  jspractice: jsPracticeData,
  reactpractice: reactPracticeData,
};
export default function PaginationList({ module }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleChange = (_, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  };

  const ITEMS_PER_PAGE = 10;
  const location = useLocation();
  useEffect(() => {
    setSearch("");
    setPage(1);
  }, [location.pathname]);

  const moduleData = datasetMap[module] || [];

  const filteredData = useMemo(() => {
    if (search.trim() === "") {
      return moduleData;
    } else {
      return allData.filter((item) =>
        item.question.toLowerCase().includes(search.toLowerCase())
      );
    }
  }, [search, module]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Box p={{ xs: 1, sm: 2, md: 3 }}>
      {/* Search Box */}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          mb: 3,
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          boxShadow: 2,
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by question..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // Reset to page 1 on search
          }}
          inputProps={{ "aria-label": "search questions" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Card */}
      {currentData.map((item) => (
        <Card
          key={item.id}
          sx={{
            mb: 4,
            px: { xs: 1, sm: 2 },
            py: { xs: 2, sm: 3 },
            borderRadius: 3,
            boxShadow: 4,
            backgroundColor: "#ffffff",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.01)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              variant="h6"
              color="primary"
              fontWeight={600}
              fontSize={{ xs: "1rem", sm: "1.25rem" }}
            >
              {item.id}. {item.question}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.7,
                color: "#333",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              {item.answer}
            </Typography>

            <SyntaxHighlighter
              language="javascript"
              style={docco}
              wrapLongLines={true}
              customStyle={{
                fontSize: "0.85rem",
                fontFamily: "'Fira Code', monospace",
                padding: "16px",
                borderRadius: "8px",
                lineHeight: 1.6,
                overflowX: "auto",
                backgroundColor: "#f4f4f4",
              }}
            >
              {item.example}
            </SyntaxHighlighter>
          </CardContent>
        </Card>
      ))}

      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        variant="outlined"
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            background: "linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%)",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            "&:hover": {
              opacity: 0.9,
            },
            "&.Mui-selected": {
              background: "#fff",
              color: "#ff4b2b",
              border: "1px solid #ff4b2b",
              fontWeight: "bold",
            },
          },
        }}
      />
    </Box>
  );
}
