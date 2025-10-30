// src/app/(components)/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// 👇 CORRECTION : Le type s'importe depuis la racine du paquet
import { type ThemeProviderProps } from "next-themes" 

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}