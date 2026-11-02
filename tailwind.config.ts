import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151715",
        cream: "#F4EDE1",
        copper: "#C97B4E",
        olive: "#817F73",
      },
    },
  },
  plugins: [],
};

export default config;
