import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome to my portfolio
          </p>
          <h1 className="text-balance font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            {"Hi, I'm Sarah Johnson"}
          </h1>
          <p className="mt-2 text-lg font-medium text-primary md:text-xl">
            Web Developer & Designer
          </p>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            I create beautiful, functional websites that help businesses grow.
            Passionate about clean code, thoughtful design, and delivering
            exceptional user experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <ArrowDown size={16} />
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl md:h-80 md:w-80">
            <Image
              src="/hero-portrait.jpg"
              alt="Sarah Johnson portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
