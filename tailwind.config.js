/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "13rem",
      },
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003459", // Primary color
          40: "#0078CD", // Primary color-40
          60: "#00528C", // Primary color-60
          80: "#002A48", // Primary color-80
        },
        secondary: {
          DEFAULT: "#F7DBA7", // Secondary color
          40: "#FCEED5", // Secondary color-40
          60: "#F1D092", // Secondary color-60
          80: "#EEC77E", // Secondary color-80
        },
        neutral: {
          0: "#FDFDFD", // Neutral color-00
          10: "#EBEEEF", // Neutral color-10
          20: "#CCD1D2", // Neutral color-20
          40: "#99A2A5", // Neutral color-40
          60: "#667479", // Neutral color-60
          80: "#242B33", // Neutral color-80
          100: "#00171F", // Neutral color-100
        },
        state: {
          pinkRed: "#FF564F", // Pink red
          greenLight: "#34C759", // Green light
          orangeShine: "#FF912C", // Orange shine
          blueSea: "#00A7E7", // Blue sea
        },
      },
      fontSize: {
        // Custom body text sizes
        lg: ["2rem", { lineHeight: "1.5" }], // 20px -> 2rem (32px)
        base: ["1.6rem", { lineHeight: "1.5" }], // 16px -> 1.6rem (24px)
        sm: ["1.4rem", { lineHeight: "1.5" }], // 14px -> 1.4rem (21px)
        xs: ["1.2rem", { lineHeight: "1.5" }], // 12px -> 1.2rem (18px)
        "2xs": ["1rem", { lineHeight: "1.5" }], // 10px -> 1rem (15px)
        "3xs": ["0.8rem", { lineHeight: "1.5" }], // 8px -> 0.8rem (12px)
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        // Set the base font size to 10px (1rem = 10px)
        html: { fontSize: "62.5%" },

        // Define global heading styles
        h1: { fontSize: "4.6rem", lineHeight: "6rem" }, // 46px
        h2: { fontSize: "3.6rem", lineHeight: "5.4rem" }, // 36px
        h3: { fontSize: "2.8rem", lineHeight: "3.8rem" }, // 28px
        h4: { fontSize: "2.4rem", lineHeight: "3.6rem" }, // 24px
      });
    },
  ],
};
