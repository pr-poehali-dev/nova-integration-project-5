import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    title: "Дизайн-проект",
    description:
      "Авторская концепция и полный комплект рабочей документации: планировки, чертежи, узлы, подбор материалов. Далее смета — и только потом визуализация. Чтобы не рисовать то, что невозможно реализовать.",
    direction: "top",
  },
  {
    title: "Комплектация",
    description:
      "Полный цикл от закупки до установки. Собственный склад, проверенные сборщики, налаженная логистика. Как официальный дилер ведущих европейских фабрик — управляю бюджетом с первого дня.",
    direction: "right",
  },
  {
    title: "Авторский надзор",
    description:
      "Контроль реализации лично — от первого гвоздя до последней детали. Выезжаю на объект, проверяю бригаду, слежу за комплектацией. Клиент узнаёт только о результате.",
    direction: "left",
  },
  {
    title: "Консультация",
    description:
      "Разовая помощь: подбор материалов, мебели, решений. Если нужен свежий взгляд — без полного проекта.",
    direction: "bottom",
  },
  {
    title: "Аудит проекта",
    description:
      "Проверяю чужие дизайн-проекты на ошибки: открывание дверей, эргономика, разумность материалов. Дешевле исправить на бумаге, чем переделывать на стройке.",
    direction: "bottom",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / от 2 500 до 8 000 ₽ за м² — стоимость рассчитывается индивидуально
          </p>
        </div>

        <div className="grid gap-x-16 gap-y-6 md:grid-cols-2 lg:gap-x-24 lg:gap-y-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-1.5 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/75">{service.description}</p>
    </div>
  )
}
