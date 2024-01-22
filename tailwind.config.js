/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        blue: {
          main: "#0F67FD",
          secondary: "#D8E4FA",
          tertiary: "#458CFE",
        },
        black: {
          main: "#080E1C",
          secondary: "#5D6A85",
        },
        green: {
          main: "#3FD9AB",
          secondary: "#6FF1CA",
        },
        orange: {
          main: "#FFF8EB",
          secondary: "#FACF7C",
        },
        red: {
          main: "#D93F3F",
          secondary: "#F16F6F",
        },
        purple: {
          main: "#EABEFF",
          secondary: "#F9EDFF",
        },
        warning: {
          main: "#CD7B2E",
          surface: "#FFEAD1",
          border: "#EECEB0",
          hover: "#BF6919",
          pressed: "#734011",
        },
        danger: {
          main: "#CB3A31",
          surface: "#FFF4F2",
          border: "#EEB4B0",
          hover: "#BD251C",
          pressed: "#731912",
        },
        success: {
          main: "#43936C",
          surface: "#D1FFE9",
          border: "#B8DBCA",
          hover: "#367A59",
          pressed: "#20573D",
        },
        info: {
          main: "#3267E3",
          surface: "#F0F3FF",
          border: "#B1C5F6",
          hover: "#114CD6",
          pressed: "#11317D",
        },
      },
      boxShadow: {
        s1: "0px 4px 24px 0px rgba(0, 0, 0, 0.06)",
        s2: "0px 8px 72px 0px rgba(15, 23, 42, 0.16)",
        s3: "0px 16px 72px 0px rgba(15, 23, 42, 0.16)",
        s4: "0px 16px 72px 0px rgba(15, 23, 42, 0.16)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
