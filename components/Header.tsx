import { DownloadIcon, Link2Icon } from "lucide-react";
import Link from "next/link";
import CopyLink from "./CopyLink";

const Header = () => (
  <header
    id="about"
    className="flex flex-col md:flex-row items-center justify-center sm:h-screen p-8 relative"
  >
    <div className="absolute top-3 right-3 flex gap-3">
      <Link href={"https://drive.google.com/file/d/158di4wATxFMRaOSs-YanFl0LvqBdRqg4/view?usp=sharing"}>
      <DownloadIcon
        className=" cursor-pointer"
      /></Link>
      <CopyLink/>
    </div>
    <div className="flex flex-col justify-center items-center md:w-1/2 text-center ">
      <div className="flex justify-center w-full">
        <img
          src="/ishwar-ramdasi-profile.jpg"
          alt="Profile"
          className="w-60 h-60 md:w-80 md:object-cover  rounded-2xl mb-4"
        />
      </div>
      
    </div>
    <div className="mt-8 mx-4 ps-3 md:mt-0 md:w-1/2 text-start bg-blue-900 bg-opacity-10 rounded p-5">
      <p className="text-lg md:text-xl">
      <h1 className="text-3xl lg:text-4xl md:text-6xl font-bold ">
        Ishwar Ramdasi
      </h1>
        <h2 className="text-base">Software Developer
        <span className="text-base text-gray-400"> at Asindia Innovations</span></h2>
        <div className="mt-3">{/* Contacts */}</div>
        <a href="mailto:ramdasiishwar@gmail.com" className=" text-blue-200">
          ramdasiishwar@gmail.com
        </a>{" "}
        <br />
        <a href="tel:+918329097878" className=" text-blue-200">
          Phone
        </a>
        <span className="ms-3 text-gray-500 text-sm">(+918329097878)</span>
        <br />
        <a
          href="https://www.linkedin.com/in/ishwar-ramdasi-68592a1a9"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-200  md:ml-0"
        >
          LinkedIn
        </a>
      </p>
    </div>
  </header>
);

export default Header;
