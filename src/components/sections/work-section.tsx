import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const filters = ["Все", "Квартиры", "Дома", "Коммерция", "Предметный дизайн"]

const projects = [
  { number: "01", title: "Резиденция на Байкале", city: "Иркутск", area: "320 м²", category: "Дома", direction: "left" },
  { number: "02", title: "Апартаменты в центре", city: "Иркутск", area: "95 м²", category: "Квартиры", direction: "right" },
  { number: "03", title: "Бутик-отель «Сибирь»", city: "Иркутск", area: "480 м²", category: "Коммерция", direction: "left" },
  { number: "04", title: "Загородный дом", city: "Листвянка", area: "210 м²", category: "Дома", direction: "right" },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [activeFilter, setActiveFilter] = useState("Все")

  const filtered = activeFilter === "Все" ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 flex flex-col gap-4 transition-all duration-700 md:mb-10 md:flex-row md:items-end md:justify-between ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <div>
            <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Портфолио
            </h2>
            <p className="font-mono text-sm text-foreground/60 md:text-base">/ Реализованные проекты</p>
          </div>
          <a
            href="#"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Смотреть все проекты →
          </a>
        </div>

        {/* Filters */}
        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
                activeFilter === filter
                  ? "border-foreground/60 bg-foreground/15 text-foreground"
                  : "border-foreground/20 text-foreground/50 hover:border-foreground/40 hover:text-foreground/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-0">
          {filtered.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; city: string; area: string; category: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${200 + index * 100}ms`,
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-0.5 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50">{project.city} · {project.area}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.category}</span>
    </div>
  )
}
