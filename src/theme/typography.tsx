interface Typography {
  fontFamily: string;
  sizes: {
    small: number;
    regular: number;
    large: number;
    extraLarge: number;
  };
  weights: {
    regular: string;
    medium: string;
    bold: string;
  };
}

const typography: Typography = {
  fontFamily: "Montserrat",
  sizes: {
    small: 12,
    regular: 16,
    large: 20,
    extraLarge: 24,
  },
  weights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

export default typography;
