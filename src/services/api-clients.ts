import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "18cdc432cefc40faad53cdd4db9127d5",
  },
});
