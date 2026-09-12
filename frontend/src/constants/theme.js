// VYBE App Theme - Dark mode with vibrant accents
export const THEME = {
  colors: {
    // Background
    background: '#000000',
    surface: '#1A1A1A',
    surfaceLight: '#2A2A2A',
    
    // Primary colors
    primary: '#4FFFB0', // Cyan/mint green
    secondary: '#5B9FFF', // Blue (indigo for XP)
    accent: '#FFB84D', // Orange/gold
    
    // Premium colors (Gold theme)
    premium: '#FFD700', // Gold
    premiumLight: '#FFA500', // Light gold/orange
    premiumDark: '#B8860B', // Dark goldenrod
    premiumGlow: 'rgba(255, 215, 0, 0.3)',
    
    // Status colors
    success: '#4FFFB0',
    warning: '#FFB84D',
    error: '#FF4D4D',
    
    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    textMuted: '#666666',
    
    // Gradients
    gradientCyan: ['#4FFFB0', '#00D9A0'],
    gradientBlue: ['#5B9FFF', '#4D7FFF'], // Indigo for XP
    gradientOrange: ['#FFB84D', '#FF9500'],
    gradientFire: ['#FF6B35', '#FF8E53'],
    gradientPremium: ['#FFD700', '#FFA500', '#FFD700'], // Gold gradient for Premium
    
    // Circle progress colors
    stepsColor: '#4FFFB0', // Emerald for Points
    xpColor: '#5B9FFF', // Indigo for XP
    coffeeColor: '#FFB84D',
    premiumColor: '#FFD700', // Gold for Premium
  },
  
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    huge: 32,
    massive: 48,
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
  },
};

export default THEME;
