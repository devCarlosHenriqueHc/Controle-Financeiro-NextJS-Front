import "./globals.css";

export const metadata = {
  title: "Controle de Despesas",
  description: "Aplicação para controle financeiro de despesas e receitas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
