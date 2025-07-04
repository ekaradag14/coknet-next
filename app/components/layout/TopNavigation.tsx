'use client';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import Inventory2Icon from "@mui/icons-material/Inventory2"; // Commented out for first draft
import ArticleIcon from "@mui/icons-material/Article";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Commented out for first draft
import EmailIcon from "@mui/icons-material/Email";
// import LoginIcon from "@mui/icons-material/Login"; // Commented out for first draft
import StarIcon from "@mui/icons-material/Star";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
const coknetLogo = "/coknet_logo.svg";

// ÇokNet Logo Icon Component
function CokNetIcon() {
  return (
    <img src={coknetLogo} alt="ÇokNet Logo" style={{ width: '100%', height: '100%' }} />
  );
}

export default function TopNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigationItems = [
    { label: "Özelliklerimiz", href: "/ozellikler", icon: <LightbulbIcon /> },
    { label: "Faydaları", href: "/faydalari", icon: <StarIcon /> },
    { label: "Hakkımızda", href: "/hakkimizda", icon: <InfoIcon /> },
    // { label: "Blog", href: "/blog", icon: <ArticleIcon /> }, // Blog commented out
    { label: "Hesaplama", href: "/hesaplama", icon: <CalculateIcon /> },
    { label: "İletişim", href: "/iletisim", icon: <EmailIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with Logo and Close Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          backgroundColor: "#FFF",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{width: '150px'}}>
          <CokNetIcon />
        </Stack>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
            p: 1,
            "&:hover": {
              backgroundColor: "#F1F5F9",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 20, color: "#000" }} />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <Box sx={{ flex: 1, p: 3 }}>
        <List sx={{ p: 0 }}>
          {navigationItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: "8px",
                  py: 1.5,
                  px: 1.5,
                  "&:hover": {
                    backgroundColor: "#F8FAFC",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 44, color: "#000" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1E293B",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Commented out for first draft
      {/* Login/Register Button */}
      {/* <Box sx={{ p: 3, borderTop: "1px solid #E2E8F0" }}>
        <Button
          fullWidth
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: "#F6EB23",
            color: "white",
            borderRadius: "8px",
            py: 1.5,
            px: 3,
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: "#6D28D9",
            },
          }}
        >
          <LoginIcon sx={{ fontSize: 20 }} />
          Giriş / Kayıt
        </Button>
      </Box> */}
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#FFF",
          borderBottom: "1px solid #E5E7EB",
          color: "#374151",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "65px !important",
              px: { xs: 2, sm: 3 },
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Mobile: Logo + Menu Button row, then Countdown below */}
            <Box sx={{ display: { xs: "flex", lg: "none" }, flexDirection: "column", width: "100%", mt: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",mb:1 }}>
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    display: "block",
                     width: "150px",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                    "&:focus": { textDecoration: "none" },
                    "&:active": { textDecoration: "none" },
                    "&:visited": { textDecoration: "none" },
                    "& *": { textDecoration: "none" },
                  }}
                >
                  <CokNetIcon />
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
          
                  onClick={handleDrawerToggle}
                  sx={{ color: "#374151",marginLeft: 'auto' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Desktop: Logo + Countdown side by side */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
              }}
            >
              <Box
                component={Link}
                href="/"
                sx={{
                  display: "block",
                  width: '100px',
                  height: '65px',
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "none" },
                  "&:focus": { textDecoration: "none" },
                  "&:active": { textDecoration: "none" },
                  "&:visited": { textDecoration: "none" },
                  "& *": { textDecoration: "none" },
                }}
              >
                <CokNetIcon />
              </Box>
            </Box>

            {/* Desktop Navigation - Centered */}
            <Stack
              direction="row"
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                ml: "auto",
                justifyContent: "center",
              }}
            >
              {navigationItems.slice(0, 6).map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    padding: "1.5px",
                    paddingTop: "1px",
                    borderRadius: "6px",
                    marginLeft: index === 0 ? "0px" : "16px",
                    // "&:hover": {
                    //   backgroundColor: "rgba(55, 65, 81, 0.04)",
                    //   color: "#1A1A1A",
                    // },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>

            {/* Desktop Action Buttons */}
            <Stack
              direction="row"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {/* Commented out for first draft
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4318D1",
                  color: "white",
                  borderRadius: "6px",
                  px: 2,
                  py: 1,
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  lineHeight: "20px",
                  minHeight: "36px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#3614B0",
                    boxShadow: "none",
                  },
                }}
              >
                Satın Al
              </Button>
              */}

              {/* Commented out for first draft
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#4318D1",
                  color: "#4318D1",
                  backgroundColor: "#FFF",
                  borderRadius: "6px",
                  px: 2,
                  py: 1,
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  lineHeight: "20px",
                  minHeight: "38px",
                  ml: "20px",
                  "&:hover": {
                    borderColor: "#3614B0",
                    backgroundColor: "rgba(67, 24, 209, 0.04)",
                  },
                }}
              >
                Giriş/Kayıt
              </Button>
              */}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "100%", sm: 400 },
            border: "1px solid #E2E8F0",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
