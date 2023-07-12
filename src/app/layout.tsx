"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import Header from "@/components/Header";
import Container from "@mui/material/Container";
import theme from "@/utils/theme";

const inter = Inter({ subsets: ["greek"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ padding: 0, margin: 0, boxSizing: "border-box" }}
      >
        <ThemeProvider theme={theme}>
          <Header />
          <Container maxWidth="xs">{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
