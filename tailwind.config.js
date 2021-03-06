module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(208, 91%, 96%)",
          exxLight: "hsl(208, 54%, 93%)",
        },
        gray: {
          dark: "#657786",
          light: "#e7e7e8",
          extraLight: "#E1E8ED",
          lightest: "#F5F8FA",
          exxLight: "#f7f7f7",
        },
        black: "#14171A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
