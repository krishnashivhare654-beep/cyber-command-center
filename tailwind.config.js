/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dark mode ko class-based handle karne ke liye (ThemeProvider ke saath)
  darkMode: ["class"],
  
  // Ye sabse important part hai: Tailwind ko batana ki classes kahan-kahan scan karni hain
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",      // Saare pages (Home, About, Arsenal)
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Saare reusable components (Navbar, Terminal)
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",   // Theme provider context
  ],

  theme: {
    extend: {
      // Yahan hum aapke Cyber-Theme ke colors aur fonts customize kar sakte hain
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#10b981", // Emerald-500 (Aapka Signature Color)
          foreground: "#ffffff",
        },
      },
      // Agar aapko glassmorphism ke liye extra filters chahiye
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};