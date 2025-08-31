import Image from "next/image";
import ProfilePic from "../../public/images/kamrul.jpg";
import Intro from "./helper-ui/Intro";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Github, Linkedin, Facebook , ContactRound } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  return (
    <div id="home" className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center relative z-50">
        <div className="flex flex-col gap-6 w-full">
           <Intro />

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

            <div className="flex gap-4">
          <InteractiveHoverButton icon={ContactRound}>Contact Me</InteractiveHoverButton>
          <InteractiveHoverButton>Download CV</InteractiveHoverButton>
        </div>
        <div className="flex gap-4">
          <Link href={"https://github.com/kamrulhasan2"} target="_blank">
            <Github />
          </Link>
          <Link href={"https://www.linkedin.com/in/kamrul-hasan-a2935017a/"} target="_blank">
            <Linkedin />
          </Link>
          <Link href={"https://www.facebook.com/kamrulhasan3778/"} target="_blank">
            <Facebook/>
          </Link>
        </div>

        </div>
       
    </div>
  );
}
