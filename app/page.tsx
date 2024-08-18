import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import Link from "next/link";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SkillList from "@/components/SkillList";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AdditionalInfo from "@/components/AdditionalInfo";
import Interests from "@/components/Interests";
import SideNav from "@/components/SideNav";
import Education from "@/components/Education";
import Resume from "@/components/resume";

export default function Home() {
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll bg-gradient-to-b from-black to-sky-950 ">
  //     <div>
  //       <HeroSection />
  //       <AboutSection />
  //       <div className="mt-8">
  //         <Link href="/path-to-your-resume.pdf" download>
  //           <span className="text-lg font-medium text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-md">
  //             Download My Resume
  //           </span>
  //         </Link>
  //       </div>
  //     </div>
  //   </main>
  // );


  const sections = [
    { id: "about", title: "About" },
    { id: "summary", title: "Professional Summary" },
    { id: "skills", title: "Technical Skills" },
    { id: "experience", title: "Professional Experience" },
    { id: "education", title: "Education" },
    { id: "projects", title: "Projects" },
    { id: "additional", title: "Additional Information" },
    { id: "interests", title: "Interests" },

  ];
  return (
    <div className="grid grid-cols-12 bg-[#001029]">
      <div className="hidden lg:block lg:col-span-2">
      <SideNav sections={sections} />
      </div>
      <div className="col-span-12 lg:col-span-10 p-5">
        <div className="bg-blue-800 bg-opacity-10 p-4 rounded-3xl ">
        <Resume sections={sections}/>
        </div>
      </div>
    </div>
  );
}
