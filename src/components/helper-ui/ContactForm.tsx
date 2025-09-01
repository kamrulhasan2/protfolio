"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { IconMessage } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;


export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", data);
  };

  return (
    <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col">
        <div className="mb-3 w-full md:w-8/12">
          <Input
            id="name"
            placeholder="Your Name"
            type="text"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          
          <Input
            id="email"
            placeholder="Your Email"
            type="email"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          
          <textarea
            id="message"
            placeholder="Your message"
            {...register("message")}
            className={cn(
              `shadow-input m-0.5 dark:placeholder-text-neutral-600 flex h-24 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`
            )}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
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
