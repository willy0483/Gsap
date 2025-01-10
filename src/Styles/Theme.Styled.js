export const theme = {
  color: {
    primary: "#595168",
    black: "#000000",
    white: "#FFFFFF",
    background: "#EEEEEE",
  },
  fonts: ["Space Grotesk", "Open Sans"],
  grid: {
    breakpoints: {
      xs: "320px",
      s: "480px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    mobile: {
      primary: {
        rows: "1fr 1fr 9fr 1fr",
        columns: "5fr 1fr",
        areas: `
                "header header"
                "navbar navbar"
                "main main"
                "footer footer"
            `,
      },
    },
    tablet: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header navbar navbar navbar navbar"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header navbar navbar navbar navbar"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
  },
};

export default theme;