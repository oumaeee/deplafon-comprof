import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const pages = ["Home", "Services", "Product", "Variant"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [ref, inView] = useInView({ rootMargin: "30px" });
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    if (inView === true) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  }, [inView]);
  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={isScrollDown ? 0 : 2}
        sx={{
          bgcolor: isScrollDown ? "transparent" : "grey.50",
          top: 0,
          transition: "all 0.3s ease",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: "flex", mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: "1",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: { md: 1, sm: 0 },
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="contained"
                size="small"
                sx={{
                  my: 2,
                  mx: 1,
                  display: "block",
                }}
              >
                ORDER NOW
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
              <IconButton
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    my: 2,
                    mx: 1,
                    display: "block",
                  }}
                >
                  ORDER NOW
                </Button>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          bgcolor: "grey.300",
          height: "1px",
        }}
        ref={ref}
      />
      <Outlet />
    </>
  );
}
export default Header;
