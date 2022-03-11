import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCategory } from "../api";
import { setCategory, setDataByCategory } from "../redux/actions/newsActions";
import Book from "../assets/images/book.png";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("world");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setError(false);

    const obj = await getCategory(category);
    if (obj.success) {
      setData(obj.data);
    } else setError(true);

    setLoading(false);
  }, [category]);

  const changeCategory = (item) => {
    console.log(item);
    setDataByCategory(item);
    navigate("/books");
  };
  return (
    <Box sx={{p: {xs:'15px 0px', sm: '40px 0px', background: 'rgba(0, 0, 0, 0.1)'}}}>
      <Typography sx={{
        width: '100%',
        textAlign: 'center',
        pb: {xs:2, sm:5},
        fontSize: {xs: '24px', sm: '30px'}
      }}>Categories</Typography>
      <Container>
        <Grid
          container
          sx={{
            width: "100%",
            textAlign: "center",
            margin: "0 !important",
            padding: "0 !important",
          }}
        >
          {!loading ? (
            data.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  onClick={() => changeCategory(item.list_name_encoded)}
                  sx={{
                    textAlign: "center !important",
                    minHeight: "150px !important",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      background: 'white',
                      borderRadius: "5px",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      cursor: "pointer",
                      boxShadow: 2,
                    }}
                  >
                    <img src={Book} />
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "15px" },
                        maxWidth: "80%",
                      }}
                    >
                      {item.display_name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })
          ) : (
            <Box sx={{
              width: "100%",
              height: {xs: '200px', sm: '300px', md: "500px"},
              display: 'flex',
              alignItems: 'center',
              justifyContent: "center",
            }}><CircularProgress color="inherit" /></Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
