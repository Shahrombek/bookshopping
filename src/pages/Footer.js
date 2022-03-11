import { Box, ImageListItem } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo.png";
import Algorismic from "../assets/images/Algorismic.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.3)",
        padding: {
          xs: "10px 12px",
          sm: "10px 34px",
          md: "10px 60px",
          lg: "10px 100px",
        },
      }}
    >
      <ImageListItem onClick={() => navigate("/")}>
        ,
        <img
          style={{ minHeight: "30px", maxHeight: "50px", cursor: "pointer" }}
          src={Logo}
        />
      </ImageListItem>
      <ImageListItem sx={{height: {xs:'55px !important', sm:'70px !important'}}}>
        <a href="https://www.algorismic.uz/">
          <img
            style={{ height: "100%"}}
            src={Algorismic}
          />
        </a>
      </ImageListItem>
    </Box>
  );
};

export default Footer;
