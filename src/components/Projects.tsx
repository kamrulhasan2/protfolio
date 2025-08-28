import Link from "next/link";
import React from "react";
import { ViewIcon , LinkIcon } from "lucide-react";
import {InteractiveHoverButton} from "./magicui/interactive-hover-button";

const projectsData = [
  {
    title: "Music Academy",
    description:
      "Music Academy, a modern, interactive web application built with Next.js and TypeScript. This platform is designed for a music school, offering a seamless experience for students to browse courses, learn about instructors, and sign up for webinars.",
    link: "#",
    code: "https://github.com/kamrulhasan2/music-academy-next.js",
    previewVideo: "#",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Aceternity UI ",
      "Tabler Icons",
      "Framer Motion",
    ],
  },
  {
    title: "FocusTube",
    description:
      "FocusTube is a distraction-free YouTube course viewer designed to help users watch educational playlists without interruptions. It allows users to save, manage, and track their learning progress efficiently.",
    link: "https://focustube2.netlify.app/",
    code: "https://github.com/kamrulhasan2/FocusTube",
    previewVideo: "#",
    technologies: [
      "React",
      "React-Router",
      "MUI",
      "Tailwind CSS",
      "Redux",
      "easy-peasy",
      "React Hook Form",
      "Yup Validation",
      "localStorage",
      "YouTube API V3"
    ],
  },
  {
    title: "Track Zone",
    description:
      "The Track Zone Project is a web-based application built using React that allows users to create and manage multiple clocks with different timezones. The project aims to test and enhance React skills by implementing core functionalities without using external state management libraries or a backend.",
    link: "https://track2one.netlify.app/",
    code: "https://github.com/kamrulhasan2/TrackZone_app",
    previewVideo: "#",
    technologies: [
      "React",
      "Custom Hooks",
      "useForm",
      "useClock",
      "useClocks",
      "useEvents",
      "localStorage",
      "date-fns",
      "styled-components",
    ],
  },
  {
    title: "Result MS",
    description:
      "The Result Processing System is a web-based application designed to help academic institutions manage student performance data. It stores and processes assignment, class test, midterm, and final examination marks for students, categorized by session, department, and semester. The system calculates GPA and CGPA for students and enables them to view their individual results for specific semesters.",
    link: "#",
    code: "https://github.com/kamrulhasan2/ResultMS",
    previewVideo: "#",
    technologies: [
      "React",
      "React-Router",
      "MUI",
      "Tailwind CSS",
      "Redux",
      "easy-peasy",
      "React Hook Form",
      "Yup Validation",
      "localStorage",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <InteractiveHoverButton icon={ViewIcon} >View</InteractiveHoverButton>
                </Link>
                <Link href={project.code}>
                  <InteractiveHoverButton icon={LinkIcon} >Code</InteractiveHoverButton>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
