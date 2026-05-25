import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    title: "Знакомство",
    description:
      "Два часа разговора — не про интерьер, а про вас. Как вы живёте, что любите, как готовите, мечтаете о собаке или уже завели. Из этих деталей строится пространство.",
    direction: "left",
  },
  {
    number: "02",
    title: "Концепция и бюджет",
    description:
      "Художественная мысль и приблизительная смета — до визуализации. Я хочу понимать, что мы рисуем то, что можно реализовать. Иначе это просто красивая картинка.",
    direction: "right",
  },
  {
    number: "03",
    title: "Проектирование и согласование",
    description:
      "Чертежи, узлы стыков, подбор субподрядчиков. Проверяю каждое решение на практичность — шкафы должны открываться, двери не должны упираться в кровать.",
    direction: "left",
  },
  {
    number: "04",
    title: "Реализация",
    description:
      "Логистика, склад, бригады. Я контролирую каждый этап лично — чтобы то, что нарисовано, совпало с тем, что построено.",
    direction: "right",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Процесс
          </h2>
          <p className="max-w-xl font-mono text-sm text-foreground/60 md:text-base">
            / Я беру ответственность за каждый этап — до момента, когда вы надеваете тапочки
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-24">
          {steps.map((step, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                return step.direction === "left" ? "-translate-x-12 opacity-0" : "translate-x-12 opacity-0"
              }
              return "translate-x-0 opacity-100"
            }

            return (
              <div
                key={step.number}
                className={`group transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-3xl font-light text-foreground/20 md:text-4xl group-hover:text-foreground/40 transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
                <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
