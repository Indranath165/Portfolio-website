import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10 mb-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col gap-10 px-10">
        {/* First row with 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
        {/* Second row with 2 projects centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3 mx-auto">
          {PROJECTS.slice(3).map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
