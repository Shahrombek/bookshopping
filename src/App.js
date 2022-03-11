import { Provider } from "react-redux";
import store from "./redux/store";
import { Box } from "@mui/system";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import Section from "./pages/Section";
import DataCategory from "./pages/DataCategory";
import Footer from "./pages/Footer";

function App() {

  return (
    <Provider store={store}>
      <Box sx={{
        maxWidth: '1920px',
        margin: '0 auto',
      }}>
        <Header />
        <Routes>
          <Route path="/" element={<Section/>} />
          <Route path="/books" element={<DataCategory/>} />
        </Routes>
        <Footer />
      </Box>
    </Provider>
  );
}

export default App;
