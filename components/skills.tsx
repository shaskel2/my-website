const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    category: "Other",
    skills: ["WordPress", "Git", "Tailwind CSS", "Node.js"],
  },
]

const categoryColors: Record<string, string> = {
  Frontend:
    "bg-primary/10 text-primary border-primary/20",
  "Design Tools":
    "bg-orange-50 text-orange-700 border-orange-200",
  Other:
    "bg-secondary text-secondary-foreground border-border",
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          {"Skills & Technologies"}
        </h2>
        <div className="mx-auto mb-12 mt-3 h-1 w-16 rounded-full bg-primary" />

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="text-center">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition-transform hover:scale-105 ${categoryColors[group.category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
