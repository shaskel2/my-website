import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A full-featured online shop with product filtering, cart management, and secure checkout powered by Stripe.",
    image: "/project-ecommerce.jpg",
  },
  {
    title: "Restaurant Website",
    description:
      "An elegant site for a local restaurant featuring an interactive menu, reservation system, and photo gallery.",
    image: "/project-restaurant.jpg",
  },
  {
    title: "Portfolio Blog",
    description:
      "A minimal, fast personal blog built with Next.js and Markdown, featuring dark mode and syntax highlighting.",
    image: "/project-blog.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          My Projects
        </h2>
        <div className="mx-auto mb-12 mt-3 h-1 w-16 rounded-full bg-primary" />

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                  View Project <ExternalLink size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
