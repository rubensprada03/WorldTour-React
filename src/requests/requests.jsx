import { ApiPexels } from "./api";

export const getImagesFromPexels = async (query) => {
  try {
    const response = await ApiPexels.get(
      `search?query=${query
        .trim()
        .replace(/\s+/g, "%20")}&orientation=landscape`
    );
    console.log(response);
    return response.data.photos;
  } catch (error) {
    throw error;
  }
};
