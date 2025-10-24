"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleServiceClick = (serviceName: string) => {
    const servicesSection = document.getElementById("servicios")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background text-foreground rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">N&C</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">N&C Servicios Generales</h3>
                <p className="text-sm text-background/70">Neithan</p>
              </div>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed max-w-md">
              Consultoría, evaluación de proyectos y librería especializada. Tu socio estratégico para el éxito
              empresarial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-background transition-colors text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/80 hover:text-background transition-colors text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/80 hover:text-background transition-colors text-sm">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/80 hover:text-background transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleServiceClick("consultoria")}
                  className="text-background/80 hover:text-background transition-colors text-sm text-left"
                >
                  Consultoría y Evaluación de Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("certificacion")}
                  className="text-background/80 hover:text-background transition-colors text-sm text-left"
                >
                  Certificación de Cursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("libreria")}
                  className="text-background/80 hover:text-background transition-colors text-sm text-left"
                >
                  Librería
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} N&C Servicios Generales Neithan. Todos los derechos reservados.
            </p>
            {/*<div className="flex gap-6">
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Términos
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}
