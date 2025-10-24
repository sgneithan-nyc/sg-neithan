"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    if (submitMessage?.type === "success") {
      const timer = setTimeout(() => {
        setSubmitMessage(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [submitMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitMessage(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.",
        })
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitMessage({
          type: "error",
          text: data.error || "Error al enviar el mensaje. Por favor, intenta de nuevo.",
        })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      setSubmitMessage({
        type: "error",
        text: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Contacto</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Hablemos de tu Proyecto</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Estamos listos para ayudarte a alcanzar tus objetivos. Contáctanos hoy y descubre cómo podemos impulsar el
            éxito de tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Teléfono</h3>
                <p className="text-sm text-muted-foreground mb-2">Llámanos de Lun-Vie 9am-6pm</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <a href="tel:+51956455592" className="text-primary hover:underline font-medium">
                      956 455 592
                    </a>
                    <a
                      href="https://wa.me/51956455592"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                      title="Contactar por WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="tel:+51963855453" className="text-primary hover:underline font-medium">
                      963 855 453
                    </a>
                    <a
                      href="https://wa.me/51963855453"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                      title="Contactar por WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-2">Escríbenos en cualquier momento</p>
                <a href="mailto:cmpuitiza@gmail.com" className="text-primary hover:underline font-medium break-all">
                  sg.neithan@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Contacto</h3>
                <p className="text-sm text-muted-foreground mb-2">Persona de contacto</p>
                <p className="text-sm font-medium">Clarita Melissa Puitiza Lucano</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@ejemplo.com"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 956 455 592"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    rows={6}
                    required
                    disabled={isLoading}
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitMessage.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Nuestra Ubicación
                  </h3>
                  <div className="relative w-full h-[300px] rounded-lg overflow-hidden border-2 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.788013583778!2d-78.5247127!3d-5.6466389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d9d4b3a8d8f8b1%3A0x8f1c1c1c1c1c1c1c!2s5%C2%B038%2747.9%22S%2078%C2%B031%2721.1%22W!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de N&C Servicios Generales"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Haz clic en el mapa para ver la ubicación completa en Google Maps
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
