// ClientThemeProvider.tsx
'use client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'; // Ajuste o caminho conforme necessário

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}