module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#EDF0EB",
        "green": "#4F6A4E",
        "dark-green": "#2F412F",
        "yellow": "#F0BB32",
        "blue": "#2C99D6",
        "dark-gray": "#333333",
      },
      fontFamily: {
        "serif-bold": ["PTSerif-Bold"],
        "serif-regular": ["PTSans-Regular"],
        "sans-bold": ["PTSans-Bold"],
        "sans-regular": ["PTSans-Regular"],
      },
      fontSize: {
        base: ["18px", "24px"],
        lg: ["20px", "30px"],
        xl: ["28px", "30px"],
        "2xl": ["32px", "40px"],
        "3xl": ["80px", "84px"],
      },
    },
  },
  plugins: [],
};
