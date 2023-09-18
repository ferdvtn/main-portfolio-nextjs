import DividerX from "@/components/DividerX";
import { tool } from "@/public/data";
import Image from "next/image";

interface ToolsProps {
  tools: tool[];
}

const Tools = ({ tools }: ToolsProps) => {
  return (
    <div
      id="tools"
      className="flex flex-col justify-center items-center px-5 py-10 bg-gradient-to-t md:bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 md:rounded-xl"
    >
      <h1 className="text-gray-100 font-semibold antialiased text-lg">Tools</h1>
      <DividerX className="mt-3 mb-5" />
      <ul className="w-full flex flex-wrap justify-center items-center">
        {tools.map((tool) => {
          return (
            <li key={tool.id} className="m-5">
              <a
                href={`${tool.url}`}
                target="_blank"
                className="rounded block transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-blue-300 transition duration-100"
              >
                <Image
                  src={`/img/tools/${tool.id}.png`}
                  alt={`${tool.id}.png`}
                  width={100}
                  height={100}
                  className="h-auto w-16 sm:w-24 md:w-32"
                  priority={false}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tools;
