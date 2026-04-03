export const themeTokens = {
  colors: {
    bg: '#131313',
    surface: '#0e0e0e',
    surfaceLow: '#1c1b1b',
    border: '#2a2a2a',
    text: '#e5e2e1',
    textBody: '#ccc9c8',
    textMuted: '#9e9b9a',
    primary: '#bac3ff',
    tertiary: '#ffb784',
    primaryContainer: '#4453a7',
    selection: 'rgba(186, 195, 255, 0.3)',
    glassBorder: 'rgba(255, 255, 255, 0.04)',
    error: '#ff6b6b',
    errorContainer: '#5c1a1a',
  },
  fonts: {
    display: 'Space Grotesk, system-ui, -apple-system, sans-serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
  },
  radius: {
    theme: '0.75rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.35), 0 2px 4px -2px rgb(0 0 0 / 0.35)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.45), 0 4px 6px -4px rgb(0 0 0 / 0.45)',
  },
} as const;
