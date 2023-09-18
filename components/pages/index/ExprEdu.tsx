import DividerX from "@/components/DividerX";
import { education, experience } from "@/public/data";

interface ExprEduProps {
  experiences: experience[];
  educations: education[];
}

const ExprEdu = ({ experiences, educations }: ExprEduProps) => {
  return (
    <div className="flex flex-col space-y-32 p-4 sm:space-y-0 justify-evenly items-start sm:flex-row">
      <div
        id="experiences"
        className="w-full flex flex-col justify-start items-start sm:items-center"
      >
        <div className="w-full flex flex-col items-center">
          <h1 className="font-semibold antialiased text-xl text-center">
            Experiences
          </h1>
          <DividerX className="mt-3 mb-8" />
        </div>
        <ul className="pl-4 border-l-2 border-purple-600 flex flex-col items-start space-y-5">
          {experiences.map((expr) => {
            return (
              <li
                key={expr.id}
                className="py-3 px-6 relative text-gray-100 bg-gradient-to-r from-purple-600 to-blue-500 inline-block rounded-lg"
              >
                <div className="w-4 h-4 bg-purple-600 rounded-full absolute -left-6 top-10"></div>
                <h2 className="font-semibold antialiased">{expr.title}</h2>
                <p className="text-sm">{expr.company}</p>
                <small>{expr.date}</small>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        id="educations"
        className="w-full flex flex-col justify-start items-start sm:items-center"
      >
        <div className="w-full flex flex-col items-center">
          <h1 className="font-semibold antialiased text-xl text-center">
            Educations
          </h1>
          <DividerX className="mt-3 mb-8" />
        </div>
        <ul className="pl-4 border-l-2 border-purple-600 flex flex-col items-start space-y-5">
          {educations.map((educ) => {
            return (
              <li
                key={educ.id}
                className="py-3 px-6 relative text-gray-100 bg-gradient-to-r from-purple-600 to-blue-500 inline-block rounded-lg"
              >
                <div className="w-4 h-4 bg-purple-600 rounded-full absolute -left-6 top-10"></div>
                <h2 className="font-semibold antialiased">{educ.name}</h2>
                <p className="text-sm">{educ.major}</p>
                <small>{educ.date}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExprEdu;
