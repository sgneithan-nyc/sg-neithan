"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const sections = ["inicio", "servicios", "nosotros", "contacto"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const getNavButtonClasses = (section: string) => {
    const baseClasses = "text-sm font-medium transition-all px-4 py-2 rounded-full"
    const activeClasses = "bg-primary text-primary-foreground shadow-md"
    const inactiveClasses = "text-foreground hover:text-primary hover:bg-primary/10"

    return `${baseClasses} ${activeSection === section ? activeClasses : inactiveClasses}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-background/90 backdrop-blur-xl border border-border/50 rounded-full shadow-lg shadow-primary/5 px-6 lg:px-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="/LOGO_NEITHAN.jpeg" 
                  alt="N&C Servicios Generales" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg lg:text-xl text-foreground">Servicios Generales</h1>
                <p className="text-xs text-muted-foreground">Neithan</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollToSection("inicio")} className={getNavButtonClasses("inicio")}>
                Inicio
              </button>
              <button onClick={() => scrollToSection("servicios")} className={getNavButtonClasses("servicios")}>
                Servicios
              </button>
              <button onClick={() => scrollToSection("nosotros")} className={getNavButtonClasses("nosotros")}>
                Nosotros
              </button>
              <button onClick={() => scrollToSection("contacto")} className={getNavButtonClasses("contacto")}>
                Contacto
              </button>
            </nav>

            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="rounded-full px-6 shadow-md hover:shadow-lg transition-all"
              >
                Contáctanos
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-lg p-6">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className={`text-left ${getNavButtonClasses("inicio")}`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className={`text-left ${getNavButtonClasses("servicios")}`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className={`text-left ${getNavButtonClasses("nosotros")}`}
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`text-left ${getNavButtonClasses("contacto")}`}
              >
                Contacto
              </button>
              <Button onClick={() => scrollToSection("contacto")} className="w-full mt-2 rounded-full shadow-md">
                Contáctanos
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
