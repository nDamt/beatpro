module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Esto le dice a Tailwind dónde buscar clases
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
    plugins: [],
  },
};
