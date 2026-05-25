import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Ekaterina */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <div className="mb-6 h-72 w-56 overflow-hidden rounded-sm bg-foreground/10 md:h-80 md:w-64">
                <div className="flex h-full w-full items-end justify-center bg-gradient-to-t from-foreground/20 to-foreground/5 p-4">
                  <p className="font-mono text-xs text-foreground/40">фото Екатерины</p>
                </div>
              </div>
              <h2 className="mb-1 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
                Екатерина Горголо
              </h2>
              <p className="font-mono text-sm text-foreground/60">
                Автор дизайн-проектов, руководитель Studio Gorgolo
              </p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/85 md:text-base">
                Я задаю вопросы, которые не задают другие. Нужен ли холодильник в ванной? Где вы предпочитаете читать? Мечтаете о собаке? Из этих деталей строится пространство — не из референсов.
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/85 md:text-base">
                И делаю всё, чтобы пространство работало именно на вас — а не просто хорошо выглядело.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              { value: "24", label: "года", sublabel: "в интерьерном бизнесе", direction: "right" },
              { value: "100+", label: "проектов", sublabel: "Реализовано по всей России", direction: "left" },
              { value: "∞", label: "внимания", sublabel: "к каждой детали", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-6xl lg:text-7xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}

            <div
              className={`mt-6 border-l border-foreground/20 pl-4 transition-all duration-700 md:mt-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-foreground/40">Философия</p>
              <p className="max-w-xs text-sm italic leading-relaxed text-foreground/60">
                «Соприкасаясь со мной, люди выбирают не дизайн. Они выбирают определённый способ жить.»
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 md:gap-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(5)}>
                Обсудить проект
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(2)}>
                Смотреть проекты
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}