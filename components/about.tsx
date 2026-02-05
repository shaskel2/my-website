const interests = [
  { label: "Coffee", icon: "\u2615" },
  { label: "Photography", icon: "\uD83D\uDCF8" },
  { label: "Travel", icon: "\u2708\uFE0F" },
  { label: "Coding", icon: "\uD83D\uDCBB" },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          About Me
        </h2>
        <div className="mx-auto mb-12 mt-3 h-1 w-16 rounded-full bg-primary" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              {"I'm a web developer and designer with a deep love for crafting digital experiences that are as functional as they are beautiful. With over five years of experience, I've worked with startups, small businesses, and creative agencies to bring their visions to life on the web."}
            </p>
            <p>
              {"My journey started with a curiosity for how things look and work online, which led me to study both design and front-end development. Today I specialize in building responsive, accessible interfaces using modern technologies like React, Next.js, and Tailwind CSS."}
            </p>
            <p>
              {"When I'm not at my desk, you can find me exploring new coffee shops, taking photos on weekend hikes, or planning my next travel adventure. I believe great design is everywhere if you know where to look."}
            </p>
          </div>

          {/* Interests */}
          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-sm grid-cols-2 gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-4xl" role="img" aria-label={item.label}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
