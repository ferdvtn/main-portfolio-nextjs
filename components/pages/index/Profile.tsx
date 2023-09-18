import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  scrollFn: (id: string) => void;
}

const Profile = ({ scrollFn }: ProfileProps) => {
  return (
    <div
      id="hero"
      className="relative p-4 flex justify-center items-center h-64 sm:space-x-8"
    >
      <Image
        src="/img/user.png"
        alt="user"
        width={200}
        height={200}
        className="w-64 h-auto absolute -left-24 sm:relative sm:left-0 bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl rounded-full"
        priority={false}
      />
      <div className="z-10 absolute right-3 sm:relative sm:right-0">
        <h1 className="text-4xl font-bold antialiased">Ahmad Ferdian, S.Kom</h1>
        <p data-aos="fade-right">Software Engineer</p>

        <div className="mt-5 flex space-x-2 justify-start text-center">
          <Link
            href="/static/pdf/ahmad-ferdian-cv.pdf"
            target="_blank"
            className="py-2 px-4 bg-red-400 text-white font-semibold antialiased rounded transition-opacity duration-100 hover:opacity-80"
          >
            Download CV
          </Link>
          <button
            onClick={() => scrollFn("experiences")}
            className="py-2 px-4 bg-green-400 text-gray-700 font-semibold antialiased rounded transition-opacity duration-100 hover:opacity-80"
          >
            Experiences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
