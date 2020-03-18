import axios from "axios";

const myKey = "14763371-8ad954d112ffa98330dee37e7";
const BASE_URL = "https://pixabay.com/api/";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${myKey}&image_type=all&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery
};
