import DividerX from "@/components/DividerX";

interface AboutMeProps {
  scrollFn: (id: string) => void;
}

const AboutMe = ({ scrollFn }: AboutMeProps) => {
  return (
    <div id="aboutme" className="p-4 flex flex-col justify-start items-center">
      <h1 className="font-semibold antialiased text-xl">About me</h1>
      <DividerX className="mt-3 mb-8" />

      <p className="mb-16 text-sm text-center leading-relaxed max-w-md">
        Hello, I&apos;m <b>Ferdian</b>. Currently I&apos;m working as an{" "}
        <i>
          <strong>Software Engineer</strong>
        </i>{" "}
        at{" "}
        <i>
          <u>
            <strong>
              <a href="https://www.kompasgramedia.com/" target="_blank">
                Kompas Gramedia
              </a>
            </strong>
          </u>
        </i>
        . Information systems graduate student in 2020 with GPA of 3.6 of 4.0.
        <br />
        In my self, honesty is the principle during work
      </p>

      <div className="flex justify-center items-center space-x-2 text-gray-100">
        <button
          onClick={() => scrollFn("educations")}
          className="py-2 px-4 rounded bg-gradient-to-r from-pink-600 to-indigo-600 transition-opacity duration-100 hover:opacity-80"
        >
          Educations
        </button>
        <a
          href="https://www.linkedin.com/in/ahmadferdian/"
          target="_blank"
          className="py-2 px-4 rounded bg-blue-900 tracking-wider transition-opacity duration-100 hover:opacity-80"
        >
          Linkedin
        </a>
      </div>
      <button
        onClick={() => scrollFn("contact")}
        className="mt-2 py-2 px-4 text-gray-100 rounded bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-100 hover:opacity-80"
      >
        Let&apos;s Connected
      </button>
    </div>
  );
};

export default AboutMe;
