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
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "JavaScript", path: "javascript" },
  { label: "ReactJS", path: "reactjs" },
  { label: "Redux", path: "redux" },
  { label: "HTML", path: "html" },
  { label: "CSS", path: "css" },
  {
    label: "Practice",
    children: [
      { label: "JS Practice", path: "jspractice" },
      { label: "React Practice", path: "reactpractice" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const [openSection, setOpenSection] = useState(null); // <- this replaces openPractice

  const handleToggleSection = (label) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };
  const location = useLocation();
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: 700, color: "#1976d2" }}
      >
        🔍 Q&A Guide
      </Typography>
      <List>
        {navItems.map((item) =>
          item.children ? (
            <Box key={item.label}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleToggleSection(item.label)}>
                  <ListItemText primary={item.label} />
                  <ExpandMoreIcon
                    sx={{
                      transform:
                        openSection === item.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Collapse
                in={openSection === item.label}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.path} disablePadding>
                      <ListItemButton
                        component={NavLink}
                        to={`/${child.path}`}
                        sx={{
                          pl: 4,
                          textAlign: "left",
                          color: "#333",
                          "&.active": {
                            backgroundColor: "#e3f2fd",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`/${item.path}`}
                sx={{
                  textAlign: "left",
                  color: "#333",
                  "&.active": {
                    backgroundColor: "#e3f2fd",
                    fontWeight: "bold",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          )
        )}
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

          {/* Mobile Icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) =>
              item.children ? (
                <Box
                  key={item.label}
                  sx={{
                    position: "relative",
                    "&:hover .dropdown": { display: "block" },
                  }}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      borderBottom: item.children.some((child) =>
                        location.pathname.includes(child.path)
                      )
                        ? "2px solid #fff"
                        : "none",
                      fontWeight: item.children.some((child) =>
                        location.pathname.includes(child.path)
                      )
                        ? "bold"
                        : 500,
                    }}
                  >
                    {item.label} ▼
                  </Button>
                  <Box
                    className="dropdown"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      backgroundColor: "white",
                      boxShadow: 3,
                      zIndex: 10,
                      borderRadius: 1,
                      minWidth: 180,
                    }}
                  >
                    {item.children.map((child) => (
                      <Button
                        key={child.path}
                        component={NavLink}
                        to={`/${child.path}`}
                        sx={{
                          justifyContent: "flex-start",
                          width: "100%",
                          px: 2,
                          py: 1,
                          textTransform: "capitalize",
                          color: "#333",
                          fontWeight: 400,
                          fontSize: "1rem",
                          "&:hover": {
                            color: "#333",
                            backgroundColor: "#f5f5f5",
                          },
                          "&.active": {
                            fontWeight: "bold",
                            backgroundColor: "#e0f7fa",
                          },
                        }}
                      >
                        {/* <CodeIcon sx={{ mr: 1 }} /> */}
                        {child.label}
                      </Button>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={`/${item.path}`}
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "6px",
                    },
                    "&.active": {
                      borderBottom: "2px solid #fff",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
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

      {/* Offset */}
      <Toolbar />
    </Box>
  );
}
