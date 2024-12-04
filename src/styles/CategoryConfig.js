import { categories } from "../constants";

const categoryStyleConfig = {
  [categories.popular]: {
    buttonStyle: {
      backgroundColor: "#ff6f61",
      color: "white",
    },
    fontStyles: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
  },
  [categories.topRated]: {
    buttonStyle: {
      backgroundColor: "#4caf50",
      color: "white",
    },
    fontStyles: {
      fontFamily: "Georgia, serif",
      color: "#111",
    },
  },
  [categories.upcoming]: {
    buttonStyle: {
      backgroundColor: "#2196f3",
      color: "white",
    },
    fontStyles: {
      fontFamily: "Courier New, monospace",
      color: "#555",
    },
  },
};

export default categoryStyleConfig;
