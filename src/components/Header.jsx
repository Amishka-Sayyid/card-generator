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
          {/*  <Image
            src="/logo/header-logo.png"
            alt="Local Skills Hub"
            width={80}
            height={80}
            className="rounded-lg object-cover hidden md:flex mr-1"
          /> */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: " Arial, Helvetica, sans-serif",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#EEF1EF", // Light color for the text
              textDecoration: "none",
            }}
          >
            GreetingCards
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
          {/*  <Image
            src="/logo/header-logo.png"
            alt="Local Skills Hub"
            width={80}
            height={80}
            className="rounded-lg object-cover flex md:hidden mr-1"
          /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: " Arial, Helvetica, sans-serif",
              fontWeight: 700,
              letterSpacing: { xs: ".05rem", sm: ".1rem", md: ".1rem" },

              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.2rem",
              },
              color: "#EEF1EF", // Light color for the text
              textDecoration: "none",
            }}
          >
            GreetingCards
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
                <SignInButton
                  sx={{ color: "#EEF1EF" }}
                  className="bg-[#8fb0bb] text-white px-4 py-2 rounded-lg hover:bg-[#A9B4C2] hover:scale-105 transition duration-300 cursor-pointer m-3"
                />
                <SignUpButton
                  sx={{ color: "#EEF1EF" }}
                  className="bg-[#8fb0bb] text-white px-4 py-2 rounded-lg hover:bg-[#A9B4C2] hover:scale-105 transition duration-300 cursor-pointer m-3"
                />
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
