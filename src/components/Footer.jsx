import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      width="100%"
      sx={{
        mt: 4,
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        color: "#fff",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: "0.7rem",  // very small screens
            sm: "0.8rem",
            md: "0.9rem"
          },
          fontWeight: 300,
          maxWidth: "90%", // ensures line wraps on small screens
          mx: "auto",
          lineHeight: 1.6,
          wordBreak: "break-word",
        }}
      >
        © 2025 Q&A Prep — Designed by 💡 Swapnali
      </Typography>
    </Box>
  );
}
