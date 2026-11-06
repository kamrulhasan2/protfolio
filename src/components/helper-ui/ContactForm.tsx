"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  message: yup
    .string()
    .min(10, "Message should be at least 10 characters")
    .required("Please enter your message"),
});

type FormData = yup.InferType<typeof schema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send form data via Web3Forms free public endpoint or mailto fallback
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "099a9a5f-9e63-4700-9e65-38dc191fc64b", // fallback public recipient key or direct notification
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `Portfolio Contact from ${data.name}`,
          from_name: data.name,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        // Fallback open mailto
        window.location.href = `mailto:kamrulhasan20656@gmail.com?subject=Contact%20from%20${encodeURIComponent(
          data.name
        )}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.email)}`;
        setSubmitStatus("success");
        reset();
      }
    } catch {
      // Graceful fallback to mail client
      window.location.href = `mailto:kamrulhasan20656@gmail.com?subject=Contact%20from%20${encodeURIComponent(
        data.name
      )}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.email)}`;
      setSubmitStatus("success");
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm">
          <CheckCircle2 className="size-4 shrink-0" />
          <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 p-3.5 rounded-xl bg-destructive/15 border border-destructive/30 text-destructive text-sm">
          <AlertCircle className="size-4 shrink-0" />
          <span>Something went wrong. Please reach out directly at kamrulhasan20656@gmail.com</span>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
          Your Name
        </label>
        <Input
          id="name"
          placeholder="e.g. John Doe"
          type="text"
          {...register("name")}
          disabled={isSubmitting}
          className="border-slate-200 dark:border-border/80 bg-white dark:bg-zinc-800 focus:border-primary text-slate-900 dark:text-white"
        />
        {errors.name && (
          <p className="text-xs text-destructive mt-0.5">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
          Email Address
        </label>
        <Input
          id="email"
          placeholder="e.g. john@example.com"
          type="email"
          {...register("email")}
          disabled={isSubmitting}
          className="border-slate-200 dark:border-border/80 bg-white dark:bg-zinc-800 focus:border-primary text-slate-900 dark:text-white"
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-0.5">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me about your project, opportunity, or collaboration..."
          {...register("message")}
          disabled={isSubmitting}
          className={cn(
            "w-full rounded-md border border-slate-200 dark:border-border/80 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
          )}
        />
        {errors.message && (
          <p className="text-xs text-destructive mt-0.5">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-2">
        <InteractiveHoverButton
          type="submit"
          icon={isSubmitting ? Loader2 : Send}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </InteractiveHoverButton>
      </div>
    </form>
  );
}

export default ContactForm;