"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BookOpen, ClipboardCheck, Award, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const services = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "CONSULTORÍA Y EVALUACIÓN DE PROYECTOS",
    description:
      "Consultoría y asesoría de proyectos para organismos, empresas e instituciones públicas y privadas, incluyendo gobiernos regionales y locales.",
    features: [
      "Estudios de pre inversión",
      "Expedientes técnicos",
      "Evaluación de proyectos",
      "Reestructuración empresarial",
    ],
    image: "/business-consulting-strategy.png",
    detailedInfo: {
      overview:
        "Consultoría y asesoría de proyectos para organismos, empresas e instituciones públicas y privadas, incluyendo gobiernos regionales y locales. Elaborar, ejecutar, monitorear y supervisar estudios de pre inversión, investigaciones y proyectos para la ejecución de obras y servicios públicos.",
      services: [
        "Elaboración de expedientes técnicos y términos de referencia, perfiles, estudios de pre factibilidad, factibilidad y definitivos, valorizaciones y tasaciones, inventarios y catalogación de activos.",
        "Estudios, evaluaciones, investigaciones, supervisión y monitoreo de las áreas de logística, marketing, organización, sistemas computacionales y organizativos, informática, desarrollo, planificación, recursos humanos, ingeniería, turismo, administración, finanzas, acuicultura, pesca y contabilidad y operaciones.",
        "Servicios de fusión, liquidación, consolidación, reestructuración, reorganización y reingeniería de empresas, organismos e instituciones.",
        "Estudios de cultura organizacional, mejora y reformulación de documentos de gestión, planes estratégicos, planes operativos, presupuestos, planes anuales de adquisiciones.",
        "Realizar diagnósticos funcionales orientados a sistematizar experiencias y mejorar la productividad.",
        "Servicios de selección y evaluación de personal.",
        "Realizar estudios actuariales para sistemas de seguros de enfermedad, pensiones y otros riesgos asegurables.",
        "Elaborar, producir y comercializar publicaciones periódicas de contenido estadístico económico y financiero.",
      ],
    },
  },
  {
    number: "02",
    icon: Award,
    title: "CERTIFICACIÓN DE CURSOS",
    description:
      "Asesoría y organización de cursos de capacitación, charlas informativas y certificaciones dirigidos a estudiantes, egresados y profesionales.",
    features: ["Cursos de capacitación", "Certificaciones oficiales", "Diplomados y seminarios", "Cursos on-line"],
    image: "/certification-courses-diploma-and-education.jpg",
    detailedInfo: {
      overview:
        "Asesoría y organización de cursos de capacitación, charlas informativas y certificaciones dirigidos a todo tipo de estudiantes, egresados y profesionales de diversas especialidades como ingeniería, derecho, administración, economía, comunicaciones y otras carreras profesionales universitarias y técnicas.",
      services: [
        "Organización de cursos de capacitación para diversas especialidades profesionales",
        "Charlas informativas y talleres especializados",
        "Certificaciones oficiales reconocidas",
        "Seminarios y diplomados profesionales",
        "Congresos de capacitación y actualización profesional",
        "Asesorías personalizadas",
        "Cursos on-line con modalidad flexible",
        "Programas dirigidos a ingeniería, derecho, administración, economía, comunicaciones y otras carreras universitarias y técnicas",
      ],
    },
  },
  {
    number: "03",
    icon: BookOpen,
    title: "LIBRERÍA",
    description:
      "Compra, venta, comercialización, distribución, importación y exportación de artículos de librería, útiles escolares y material educativo.",
    features: ["Útiles escolares", "Libros y textos", "Servicios de impresión", "Material de oficina"],
    image: "/modern-library-with-books-and-educational-material.jpg",
    detailedInfo: {
      overview:
        "Compra, venta, comercialización, distribución, importación y exportación de artículos de librería, útiles escolares y de escritorio, artículos de oficina, material educativo y servicios complementarios de impresión y edición.",
      services: [
        "Artículos de librería y útiles escolares",
        "Artículos de escritorio y oficina",
        "Artículos de cómputo y tecnología",
        "Juegos didácticos y material auxiliar educativo",
        "Métodos audiovisuales y recursos digitales",
        "Agendas y papelería en general",
        "Revistas, libros, textos escolares y universitarios",
        "Folletos y publicaciones especializadas",
        "Fabricación y edición de libros y agendas empresariales",
        "Cuadernos espiralados y productos publicitarios",
        "Servicios de fotocopiado, tipeo e impresión",
        "Escaneo, edición de fotos y videos",
      ],
    },
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Nuestros Servicios</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Soluciones Integrales para tu Empresa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ofrecemos servicios especializados diseñados para impulsar el crecimiento y éxito de tu organización en cada
            etapa de su desarrollo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group/cards">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.number}
                onClick={() => setSelectedService(index)}
                className="group/card hover:bg-white hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 hover:scale-105 hover:z-10 relative group-hover/cards:opacity-50 hover:!opacity-100 overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10 group-hover/card:to-white/90 transition-all duration-500" />
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:rotate-2"
                  />
                </div>

                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover/card:bg-primary group-hover/card:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover/card:text-primary-foreground transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover/card:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedService !== null && (
          <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
            <DialogContent 
              className="max-w-7xl max-h-[92vh] overflow-y-auto p-0" 
              onInteractOutside={(e) => {
                e.preventDefault();
                setSelectedService(null);
              }}
              showCloseButton={false}
            >
              {/* Header con imagen de fondo */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={services[selectedService].image || "/placeholder.svg"}
                  alt={services[selectedService].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                {/* Botón de cierre */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
                <DialogHeader className="relative z-10 p-8 pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      {(() => {
                        const Icon = services[selectedService].icon
                        return <Icon className="w-8 h-8 text-primary-foreground" />
                      })()}
                    </div>
                    <span className="text-6xl font-bold text-primary/20">{services[selectedService].number}</span>
                  </div>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground">
                    {services[selectedService].title}
                  </DialogTitle>
                </DialogHeader>
              </div>

              {/* Contenido del modal */}
              <div className="p-10 md:p-12 space-y-10">
                {/* Overview con diseño destacado */}
                <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
                  <h4 className="text-xl font-semibold mb-4 text-primary">Descripción General</h4>
                  <DialogDescription className="text-lg leading-relaxed text-foreground">
                    {services[selectedService].detailedInfo.overview}
                  </DialogDescription>
                </div>

                {/* Servicios en grid de 2 columnas */}
                <div>
                  <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    Servicios Incluidos
                  </h4>
                  <div className="grid md:grid-cols-2 gap-5">
                    {services[selectedService].detailedInfo.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                      >
                        <div className="w-7 h-7 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all">
                          <span className="text-sm font-bold text-primary group-hover:text-primary-foreground">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-base leading-relaxed text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action mejorado */}
                <div className="pt-8 border-t">
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <p className="text-lg font-semibold mb-1">¿Interesado en este servicio?</p>
                      <p className="text-sm text-muted-foreground">
                        Contáctanos para recibir más información y una cotización personalizada
                      </p>
                    </div>
                    <a
                      href="#contacto"
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
                    >
                      Contactar Ahora
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}
