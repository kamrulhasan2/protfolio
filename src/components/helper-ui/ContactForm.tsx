"use client";
import React from "react";
import { Input } from "../ui/input";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { IconMessage } from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
      <form className="my-8" onSubmit={handleSubmit}> 
        <div className="mb-4 flex flex-col">
            <div className="mb-3 w-full md:w-8/12">
                <Input id="name" placeholder="Your Name" type="text" onChange={handleChange} />
                <Input id="email" placeholder="Your Email" type="email" onChange={handleChange} />
                <textarea
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className={cn(
                  `shadow-input m-0.5 dark:placeholder-text-neutral-600 flex h-24 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`
                )}
          />
            </div>
            
            <div className="">
                <InteractiveHoverButton icon={IconMessage} className="text-center align-middle">
                    Send Message
                </InteractiveHoverButton>
            </div>
        </div>
  
      </form>
  );
}

export default ContactForm;
