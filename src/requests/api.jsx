import axios from "axios";

export const ApiPexels = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: "GIbJkgJEXxBVmaOnUJ4eOnu2uyqPIb6oMKZ7yrVWm0MBA1XCOOXAzLGe",
  },
});
