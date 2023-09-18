import DividerX from "@/components/DividerX";
import { project } from "@/public/data";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  projects: project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-start items-center sm:items-start px-0 sm:px-5 md:px-0"
    >
      <h1 className="font-semibold antialiased text-lg">Personal projects</h1>
      <DividerX className="mt-3 mb-8" />
      <ul className="flex flex-col justify-start items-center w-full sm:-m-3 space-y-5 sm:flex-wrap sm:flex-row sm:space-y-0">
        {projects.map((project) => {
          return (
            <li key={project.id} className="w-full sm:w-1/2 md:w-1/3">
              <div className="relative group overflow-hidden sm:m-3 transform sm:rounded-xl bg-gradient-to-r from-pink-600 to-purple-600">
                <Link
                  href={
                    project.openimage
                      ? `/img/projects/${project.id}.png`
                      : project.url
                  }
                  target="_blank"
                  className="block"
                >
                  <Image
                    src={`/img/projects/${project.id}.png`}
                    alt={`${project.id}.png`}
                    width={200}
                    height={200}
                    className="w-full h-56 object-contain object-center"
                    priority={false}
                  />
                </Link>
                <h2 className="group-hover:text-blue-500 transition duration-100 text-xs py-1 px-3 text-center w-auto rounded-xl opacity-60 whitespace-nowrap absolute bottom-1 left-1 bg-gray-800 text-gray-100">
                  {project.url}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
