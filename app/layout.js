import { Inter } from "next/font/google";
import "./globals.css";
import "./brand.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leitura do Campo Energético do Negócio - Marina Rios",
  description: "Desbloqueie a prosperidade do seu negócio em 60 minutos. Leitura do campo energético para identificar bloqueios com precisão e transformar em ações práticas.",
  openGraph: {
    title: "Leitura do Campo Energético do Negócio - Marina Rios",
    description: "Desbloqueie a prosperidade do seu negócio em 60 minutos. Leitura do campo energético para identificar bloqueios com precisão e transformar em ações práticas.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-[var(--brand-bg)] text-[var(--brand-text)]`}>
        {children}
      </body>
    </html>
  );
}
