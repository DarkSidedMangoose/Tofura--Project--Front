module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "bottom-right": "10px 10px 15px rgba(0,0,0, 0.3)",
        "bottom-right-Blue": "10px 10px 15px rgba(3, 3, 82, 0.3)",
        "bottom-left": "-15px 10px 15px rgba(0,0,0, 0.3)",
        right: "10px 0px 15px rgba(0,0,0, 0.3)",
        left: "-10px 0px 15px rgba(0,0,0, 0.3)",
        top: "0 -10px 15px rgba(0, 0, 0, 0.3)",
        bottom: "0 10px 15px rgba(0, 0, 0, 0.3)",
        boxShadow:
          "7px 7px 5px rgba(0,0,0, 0.3), -7px 7px 5px rgba(0,0,0, 0.3), 7px -7px 5px rgba(0,0,0, 0.3), -5px -5px 5px rgba(0,0,0, 0.3), 0 -2px 5px rgba(0,0,0, 0.1), 0 4px 5px rgba(0,0,0, 0.3)",
        boxShadowBlue:
          "7px 7px 5px rgba(3, 3, 82, 0.3), -7px 7px 5px rgba(3, 3, 82, 0.3), 7px -7px 5px rgba(3, 3, 82, 0.3), 0 -2px 5px rgba(3, 3, 82, 0.3), 0 4px 5px rgba(3, 3, 82, 0.3)",
      },
      screens: {
        short: { raw: "(max-height: 600px)" },
        narrow: { raw: "(max-width: 1700px)" },
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      inset: {
        "-320px": "-320px",
        "-220px": "-220px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
        "300px": "300px",
      },
      colors: {
        loginBackground: "#f3eeeee5",
        loginBorderColor: "#808080CC",
        loginButBackground: "#E6E4E3",
        sidebarChoose: "#05052c",
        footerText: "#10024a",
        mainButBorders: "#00004D",
      },
      width: {
        "3%": "3%",
        "4%": "4%",

        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "95%": "95%",
        "98%": "98%",

        "100%": "100%",
        "30px": "30px",
        "49px": "49px",
        "80px": "80px",

        "59px": "59px",
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "350px": "350px",

        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "800px": "800px",
        "1/7": "14.2857143%",
      },
      height: {
        "5%": "5%",

        "10%": "10%",
        "15%": "15%",

        "20%": "20%",
        "30%": "30%",
        "33.3%": "33.3%",

        "40%": "40%",

        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "82%": "82%",
        "90%": "90%",
        "95%": "95%",
        "98%": "98%",
        "100%": "100%",
        "30px": "30px",
        "40px": "40px",

        "59px": "59px",
        "79px": "79px",
        "100px": "100px",
        "200px": "200px",

        "300px": "300px",
        "350px": "350px",

        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "800px": "800px",
      },
      gap: {
        "5px": "5px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
