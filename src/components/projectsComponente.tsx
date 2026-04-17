type ProjectCard = {
  title: string;
  description: string;
  stack: string[];
  href: string;
};

type ProjectsComponentProps = {
  heading: string;
  sectionLabel: string;
  sectionIntro: string;
  viewRepositoryLabel: string;
  projects: ProjectCard[];
};

export const ProjectsComponent = ({
  heading,
  sectionLabel,
  sectionIntro,
  viewRepositoryLabel,
  projects,
}: ProjectsComponentProps) => {
  return (
    <main className="relative z-10 mt-16 w-full px-4 pb-20 sm:px-6 lg:px-8">
      <section className="w-full rounded-4xl border border-white/10 bg-black px-6 py-10 shadow-2xl shadow-black/50 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
            {sectionLabel}
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            {sectionIntro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.href}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                    0{index + 1}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white text-black transition-transform duration-300 group-hover:rotate-6">
                  ↗
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-zinc-200"
              >
                {viewRepositoryLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
