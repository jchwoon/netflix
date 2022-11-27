const BASE_IMG_PATH = "https://image.tmdb.org/t/p";

export const makeImgUrl = (path, format) => {
  return `${BASE_IMG_PATH}/${format ? format : "original"}${path}`;
};
