"use client";
import React from "react";
import { Input } from "../ui/input";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { IconMessage } from "@tabler/icons-react";


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
                <Input id="message" placeholder="Your message" type="text" onChange={handleChange} />
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
