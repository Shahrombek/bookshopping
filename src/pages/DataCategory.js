import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DataCategory = () => {
  const items = useSelector((state) => state.news.getDataByCategory);
  const search = useSelector((state) => state.news.searchItem);

  let ready = [];
  if(items.length !== 0){
      ready = items.payload.results.books;
      if(search.length !== 0){
        ready = search.payload;
      }
  }

  console.log(search);
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container
        sx={{
          padding: { xs: "15px 0px !important", sm: "40px 24px !important" },
        }}
      >
        {items.length !== 0 && (
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              pb: { xs: 2, sm: 5 },
              fontSize: { xs: "24px", sm: "30px" },
            }}
          >
            {items.payload.results.display_name}
          </Typography>
        )}
        {items.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              height: { xs: "200px", sm: "300px", md: "500px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Grid
            container
            sx={{
              width: "100%",
              textAlign: "center",
              margin: "0 !important",
              padding: "0 !important",
            }}
          >
            
            {ready.map((book, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  sx={{
                    textAlign: "center !important",
                    minHeight: {
                      xs: "300px !important",
                      sm: "350px !important",
                    },
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "5px",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      cursor: "pointer",
                      boxShadow: 2,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        // height: {
                        //   xs: "200px",
                        //   sm: "300px",
                        // },
                      }}
                    >
                      <Box
                        sx={{
                          height: {
                            xs: "160px",
                            sm: "230px",
                          },
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={book.book_image}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: {
                            xs: "40px",
                            sm: "70px",
                            textAlign: "start",
                          },
                          padding: '5px 10px'
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold"}}>
                          Title: <span style={{fontSize: '14px',flexWrap: 'nowrap', wordBreak: 'break-all'}}>{book.title}</span>
                        </Typography>
                        <Typography sx={{ color: "grey" }}>
                          Author: {book.author}
                        </Typography>
                        <Typography sx={{ color: "grey" }}>
                          Price:{" "}
                          <span style={{ color: "orangered" }}>
                            {book.price} $
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default DataCategory;
