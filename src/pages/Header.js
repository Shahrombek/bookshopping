import { Box, ImageListItem } from "@mui/material";
import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import Home from "../assets/images/home.png";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchDataByCategory } from "../redux/actions/newsActions";

const Header = () => {
  const navigate = useNavigate();

  const search = useSelector((state) => state.news.getDataByCategory);

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);

    if (search.length !== 0) {
      const searchItem = search.payload.results.books;
      const changeData = [];

      searchItem.map((item, index) => {
        if (item.title.toLowerCase().includes(value.toLocaleLowerCase())) {
          changeData.push(item)
        }
      });
      searchDataByCategory(changeData)
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "white",
          padding: {
            xs: "10px 12px",
            sm: "10px 34px",
            md: "10px 60px",
            lg: "10px 100px",
          },
        }}
      >
        <ImageListItem onClick={() => navigate("/")}>
          <img
            style={{ minHeight: "30px", maxHeight: "50px", cursor: "pointer" }}
            src={Logo}
          />
        </ImageListItem>
        <Paper
          component="form"
          sx={{
            p: "0px 4px",
            ml: 1,
            display: "flex",
            alignItems: "center",
            width: { xs: 170, sm: 300 },
            borderRadius: "5px",
          }}
          onClick={(e) => handleSubmit(e)}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "" }}
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <IconButton
            type="submit"
            sx={{ p: { xs: "5px", sm: "10px" } }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      <Box sx={{ mb: "-4px" }}>
        <img style={{ width: "100%" }} src={Home} />
      </Box>
    </Box>
  );
};

export default Header;
