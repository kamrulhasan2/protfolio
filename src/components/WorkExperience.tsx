import React from 'react'

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}


const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "August 2024",
    endDate: "Present",
    companyName: "DCC_CSE_LAB",
    jobTitle: "Junior Software Engineer",
    description: [
      "In my role as a Junior Software Engineer at DCC_CSE_LAB, I developed a dynamic front-end application under the supervision of Professor Monir Hossain. The application was designed to empower users by allowing them to convert any YouTube playlist into a structured, easy-to-follow online course. This project was a deep dive into the React ecosystem, where I was responsible for building the user experience from the ground up. I utilized React Router DOM to create a seamless, single-page application with intuitive navigation. To ensure a modern and responsive design, I implemented the Material-UI component library. A key aspect of the development process was building and managing reusable logic with React's custom hooks, which significantly strengthened my understanding of state management and advanced component patterns. This hands-on experience was crucial in solidifying my core skills in front-end development and building a complete, user-focused product.",
    ],
  },
  
];


const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Work Experience</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === workExperienceData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.jobTitle} at {item.companyName}
            </h3>
            <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
              <ul>
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            {item.companyLink && (
              <a
                href={item.companyLink}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
