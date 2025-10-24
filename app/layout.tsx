import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { cn } from "@/lib/utils"
import TabTitleHandler from "@/components/tab-title-handler"

export const metadata: Metadata = {
  title: "N&C Servicios Generales Neithan | Consultoría y Evaluación de Proyectos",
  description:
    "Servicios profesionales de consultoría empresarial, evaluación de proyectos y librería especializada. Tu socio estratégico para el éxito.",
  generator: "v0.app",
  icons: {
    icon: "/LOGO-NEITHAN - SIN FONDO.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <TabTitleHandler />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
