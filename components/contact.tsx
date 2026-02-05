"use client"

import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          Feedback
        </h2>
        <div className="mx-auto mb-12 mt-3 h-1 w-16 rounded-full bg-primary" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-xl border border-border bg-card p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="mb-2 font-display text-lg text-foreground">
                {"Let's connect"}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {"Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or reach out through any of the channels below."}
              </p>
            </div>

            <a
              href="mailto:sarah@example.com"
              className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Mail size={20} className="text-primary" />
              <span className="text-sm font-medium">sarah@example.com</span>
            </a>

            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
