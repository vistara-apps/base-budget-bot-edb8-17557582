module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220, 80%, 50%)',
        accent: 'hsl(200, 100%, 50%)',
        bg: 'hsl(215, 25%, 10%)',
        surface: 'hsl(215, 25%, 15%)',
        text: 'hsl(215, 40%, 90%)',
        success: 'hsl(160, 80%, 40%)',
        warning: 'hsl(35, 90%, 50%)',
        danger: 'hsl(0, 80%, 50%)',
        muted: 'hsl(215, 20%, 60%)',
      },
      spacing: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 4px 16px hsla(0, 0%, 0%, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
