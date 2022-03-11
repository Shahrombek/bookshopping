import axios from "axios";


const instanceAxios = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/lists/",
});

export const getCategory = async (category = "all") => {
  try {
    const res = await instanceAxios.get(`names.json?api-key=CVAsc73MEk3xnAnyjx8FnzV2SriBAkhl`);


    return { success: true, data: res.data.results };
  } catch (error) {
    return { success: false };
  }
};

export const getDataByCategory = async (category = "all") => {
  try {
    const res = await instanceAxios.get(`current/${category}.json?api-key=CVAsc73MEk3xnAnyjx8FnzV2SriBAkhl`);


    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
