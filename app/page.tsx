import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll bg-gradient-to-b from-black to-sky-950 ">
      <div>
        <HeroSection />
        <AboutSection />
        <div className="mt-8">
          <Link href="/path-to-your-resume.pdf" download>
            <span className="text-lg font-medium text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-md">
              Download My Resume
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
