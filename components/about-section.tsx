import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Users, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar soluciones innovadoras y sostenibles que fortalezcan el desarrollo empresarial, institucional y social, a través de servicios de consultoría, asesoría y formación de alta calidad.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Nos guiamos por la mejora continua, garantizando resultados eficientes, precisos y orientados a superar las expectativas de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description:
      "Contamos con un equipo multidisciplinario de expertos comprometidos con la innovación, la ética y la excelencia en cada proyecto que desarrollamos.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento",
    description:
      "Impulsamos el progreso de nuestros clientes mediante estrategias integrales que promueven la productividad, la sostenibilidad y la transformación digital.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-medium text-primary">Sobre Nosotros</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              N&C Servicios Generales Neithan
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos una empresa multidisciplinaria dedicada a brindar soluciones integrales en consultoría, asesoría y desarrollo de proyectos. Combinamos la experiencia profesional con la innovación tecnológica para impulsar el crecimiento sostenible de empresas, instituciones y emprendedores.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es ofrecer servicios de excelencia en las áreas financiera, ambiental, informática, educativa y empresarial, promoviendo siempre la eficiencia, la responsabilidad y la mejora continua.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="/professional-business-team-working-together-in-mod.jpg" alt="Professional team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
