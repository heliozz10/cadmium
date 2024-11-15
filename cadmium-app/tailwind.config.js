module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { 300: "var(--amber_300)" },
        black: { 900: "var(--black_900)" },
        blue: { 300: "var(--blue_300)" },
        blue_gray: {
          100: "var(--blue_gray_100)",
          300: "var(--blue_gray_300)",
          400: "var(--blue_gray_400)",
          500: "var(--blue_gray_500)",
          600: "var(--blue_gray_600)",
          800: "var(--blue_gray_800)",
        },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "900_01": "var(--gray_900_01)",
        },
        green: { 400: "var(--green_400)", "400_01": "var(--green_400_01)" },
        indigo: { 50: "var(--indigo_50)", "50_01": "var(--indigo_50_01)", "50_02": "var(--indigo_50_02)" },
        light_green: { 600: "var(--light_green_600)", a200: "var(--light_green_a200)" },
        orange: { 300: "var(--orange_300)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: { xs: "0 5px 1px 0 #191a23" },
      fontFamily: { spacegrotesk: "Space Grotesk", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
