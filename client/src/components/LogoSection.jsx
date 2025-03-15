import { useContext } from "react";
import { ThemeContext } from "../Context/createContext";

export const logos = [
  { src: "/images/python.png", alt: "Python Programming Language Logo" },
  { src: "/images/java-script.png", alt: "JavaScript Language Logo" },
  { src: "/images/html.png", alt: "HTML Logo" },
  { src: "/images/mysql.png", alt: "MySQL Database Logo" },
  { src: "/images/typescript.png", alt: "TypeScript Language Logo" },
  { src: "/images/coding-language.png", alt: "General Coding Language Logo" },
  { src: "/images/physics.png", alt: "Physics Concept Logo" },
  { src: "/images/programing.png", alt: "Programming Concepts Logo" },
  { src: "/images/css-3.png", alt: "CSS3 Logo" },
  { src: "/images/docker.png", alt: "Docker Logo" },
  { src: "/images/c-sharp.png", alt: "C# Language Logo" },
  { src: "/images/jewelry.png", alt: "Jewelry Logo" },
  { src: "/images/django.png", alt: "Django Framework Logo" },
  { src: "/images/bootstrap.png", alt: "Bootstrap Framework Logo" },
  { src: "/images/visual-studio.png", alt: "Visual Studio IDE Logo" },
  { src: "/images/atom.png", alt: "Atom IDE Logo" },
  { src: "/images/document.png", alt: "Document Icon" },
  { src: "/images/api.png", alt: "API Icon" },
  { src: "/images/cyber-criminal.png", alt: "Cybersecurity Icon" },
  { src: "/images/pie-chart.png", alt: "Pie Chart Icon" },
];

export default function LogoSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-black " : "bg-white mt-2"} py-5 sm:py-32 `}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className={`text-center text-lg/8  font-bold justify-center items-center flex font-[Open_Sans] ${theme ==="dark" ?"text-white":"text-black"}`}>
Our Expertise 
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={158}
              height={48}
              loading="lazy"
              className="col-span-2 max-h-12 h-16 w-full object-contain lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
