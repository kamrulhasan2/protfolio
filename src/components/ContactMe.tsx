import Link from "next/link";
import React from "react";
import ContactForm from "./helper-ui/ContactForm";

function ContactMe() {
  return (
    <div id="contact" className="flex flex-col gap-4 mb-20 md:mb-10">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <ContactForm />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Want to chat? Just shoot me a dm with a{" "}
        <Link
          href="https://www.facebook.com/kamrulhasan3778/"
          target="_blank"
          className="text-blue-500"
        >
          direct question on Facebook
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:kamrulhasan20656@gmail.com"
          className="text-blue-500"
        >
          kamrulhasan20656@gmail.com{" "}
        </Link>
        or direct message and call me on WhatsApp at{" "}
        <Link
          href="https://wa.me/+8801601780015"
          target="_blank"
          className="text-blue-500"
        >
          +8801601780015
        </Link>
      </p>
    </div>
  );
}

export default ContactMe;
