import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = ["JavaScript", "ReactJS", "Redux", "HTML", "CSS"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: 700, color: "#1976d2" }}
      >
        🔍 Q&A Guide
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={NavLink}
              to={`/${item.toLowerCase()}`}
              sx={{
                textAlign: "center",
                color: "#333",
                "&.active": {
                  backgroundColor: "#e3f2fd",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={6}
        sx={{
          background: "linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%)",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            💡 Q&A Guide
          </Typography>

          {/* Mobile menu icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((cat) => (
              <Button
                key={cat}
                component={NavLink}
                to={`/${cat.toLowerCase()}`}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "6px",
                    color: "white",
                  },
                  "&.active": {
                    borderBottom: "2px solid #fff",
                    fontWeight: "bold",
                  },
                }}
              >
                {cat}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Push content down to avoid header overlap */}
      <Toolbar />
    </Box>
  );
}
