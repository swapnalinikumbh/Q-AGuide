import { useState } from "react";
import { Pagination, Card, CardContent, Typography, Box } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function PaginationList({ data }) {
  const [page, setPage] = useState(1);

  const handleChange = (_, value) => setPage(value);
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box p={{ xs: 1, sm: 2, md: 3 }}>
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
