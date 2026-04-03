import type { Config } from 'tailwindcss';
import { themeTokens } from './src/theme-tokens';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: themeTokens.colors.bg,
        surface: themeTokens.colors.surface,
        'surface-low': themeTokens.colors.surfaceLow,
        border: themeTokens.colors.border,
        text: themeTokens.colors.text,
        'text-body': themeTokens.colors.textBody,
        'text-muted': themeTokens.colors.textMuted,
        primary: themeTokens.colors.primary,
        tertiary: themeTokens.colors.tertiary,
        'primary-container': themeTokens.colors.primaryContainer,
        selection: themeTokens.colors.selection,
        'glass-border': themeTokens.colors.glassBorder,
        error: themeTokens.colors.error,
        'error-container': themeTokens.colors.errorContainer,
      },
      fontFamily: {
        display: themeTokens.fonts.display.split(', ').map((font) => font.trim()),
        body: themeTokens.fonts.body.split(', ').map((font) => font.trim()),
      },
      borderRadius: {
        theme: themeTokens.radius.theme,
      },
      boxShadow: {
        sm: themeTokens.shadows.sm,
        DEFAULT: themeTokens.shadows.md,
        lg: themeTokens.shadows.lg,
      },
    },
  },
  plugins: [],
};

export default config;