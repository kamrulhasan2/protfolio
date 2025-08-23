import Image from "next/image";
import ProfilePic from "../../public/images/kamrul.jpg";
import Intro from "./helper-ui/Intro";

export default function IntroSection() {
  return (
    <div className="max-w-9/12 mx-auto mt-10 flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
        <div className="flex flex-col gap-2 w-full lg:w-4/5">
            <Intro /><br />
            <p className="text-base w-fit md:w-10/12 text-gray-800 dark:text-gray-300">
            I believe in technology's power to connect us and solve real-world problems. 
            As a Software Engineering student, I channel this belief into my passion: 
            building dynamic, user-centric web applications that provide intuitive and 
            meaningful digital experiences.
            </p>

             <p className="text-base text-gray-800 dark:text-gray-300">
                My technical expertise is centered on the full MERN stack.
                I leverage React.js and Next.js to craft responsive,
                 high-performance user interfaces, and use Node.js with Express.js 
                 to architect scalable back-end systems and secure RESTful APIs. 
                 With a solid foundation in database management using MongoDB and 
                 MySQL, I am equipped to handle the complete development lifecycle, 
                 from concept to deployment.
            </p>

        </div>
        <div className="flex items-center justify-center md:mb-2">
            <Image
            src={ProfilePic}
            alt="Kamrul Hasan"
            width={250}
            height={250}
            className="ring-amber-400 ring-4 rounded-full object-cover"
            />
        </div>
    </div>
  );
}
