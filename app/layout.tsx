export const metadata = {
  title: "Landing Skeleton",
  description: "Projeto didático Next.js + Tailwind"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  );
}
