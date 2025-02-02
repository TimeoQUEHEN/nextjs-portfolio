import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="fr">
      <body className={`${inter.className} antialiased overflow-y-hidden `}>{children}</body>
      </html>
  );
}
