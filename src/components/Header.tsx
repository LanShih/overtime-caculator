"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import Logo from "../images/calculator.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 0.5,
            gap: 1,
          }}
        >
          {/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            加班計算機
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
