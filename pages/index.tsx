import { NextPage } from "next";
import Head from "next/head";
import ArrowTop from "@/components/ArrowTop";
import Switcher from "@/components/Switcher";
import {
  experiences,
  educations,
  tools,
  projects,
  education,
  experience,
  tool,
  project,
} from "../public/data";
import Footer from "@/templates/Footer";
import AboutMe from "../components/pages/index/AboutMe";
import ExprEdu from "../components/pages/index/ExprEdu";
import Tools from "../components/pages/index/Tools";
import Projects from "../components/pages/index/Projects";
import Contact from "../components/pages/index/Contact";
import Profile from "../components/pages/index/Profile";

interface IndexProps {
  experiences: experience[];
  educations: education[];
  tools: tool[];
  projects: project[];
}

export const getServerSideProps = () => {
  return {
    props: {
      experiences,
      educations,
      tools,
      projects,
    },
  };
};

const Index: NextPage<IndexProps> = ({
  experiences,
  educations,
  tools,
  projects,
}) => {
  const scrollToId = (id: string): void => {
    const target = document.querySelector(`#${id}`);
    if (target) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        // todo: Fix this
        top: target.scrollTop,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Welcome | Ahmad Ferdian</title>
        <meta name="description" content="Ahmad Ferdian - 15/11/1998" />
      </Head>

      <div className="relative md:container mx-auto flex flex-col space-y-32">
        <Switcher />

        <Profile scrollFn={scrollToId} />

        <AboutMe scrollFn={scrollToId} />

        <ExprEdu experiences={experiences} educations={educations} />

        <Tools tools={tools} />

        <Projects projects={projects} />

        <Contact />

        <ArrowTop />
      </div>

      <Footer />
    </>
  );
};

export default Index;
