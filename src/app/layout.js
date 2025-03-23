import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fontes do Google (Geist Sans e Geist Mono)
const geistSans = Geist({
  subsets: ["latin"], // Subconjunto de caracteres
});

const geistMono = Geist_Mono({
  subsets: ["latin"], // Subconjunto de caracteres
});

export const metadata = {
  title: "Controle de Despesas",
  description: "Aplicação para controle financeiro de despesas e receitas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">  {/* Mudança para pt-br, pois o site é em português */}
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
