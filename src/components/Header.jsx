"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";

const pages = [
  { name: "HomePage", link: "/" },
  { name: "CreateCard", link: "/create-card" },
  { name: "Profile", link: "/profile" },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#7D98A1" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#EEF1EF", // Light color for the text
              textDecoration: "none",
            }}
          >
            Cards
          </Typography>
          {/* Responsive Menu for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              id="menu-button"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              aria-labelledby="menu-button"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  <Link href={page.link} passHref>
                    <Typography sx={{ textAlign: "center", color: "#7D98A1" }}>
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo or App Name */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#EEF1EF", // Light color for the text
              textDecoration: "none",
            }}
          >
            Cards
          </Typography>

          {/* Navigation buttons for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#EEF1EF", // Light color for the text
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#A9B4C2", // Hover color
                  },
                }}
              >
                <Link href={page.link} passHref>
                  <Typography sx={{ textAlign: "center", color: "#EEF1EF" }}>
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
          {/* User Action (Sign In, Sign Up or User Profile) */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User Actions">
              <SignedOut>
                <SignInButton sx={{ color: "#EEF1EF" }} />
                <SignUpButton sx={{ color: "#EEF1EF" }} />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
