"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  Wrench,
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { socialLinks } from "@/data/portfolio-data";

const navItems = [
  { href: "#home", id: "home", icon: Home, label: "Home" },
  { href: "#skills", id: "skills", icon: Wrench, label: "Skills" },
  { href: "#experience", id: "experience", icon: Briefcase, label: "Experience" },
  { href: "#projects", id: "projects", icon: Layers, label: "Projects" },
  { href: "#education", id: "education", icon: GraduationCap, label: "Education" },
  { href: "#contact", id: "contact", icon: Mail, label: "Contact" },
];

const sectionIds = ["home", "skills", "experience", "projects", "education", "contact"];

export function CustomDock() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1050);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={
        !isMobile
          ? "fixed left-4 xl:left-8 top-0 bottom-0 w-16 flex items-center z-[100]"
          : "fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center z-[100]"
      }
    >
      <TooltipProvider delayDuration={100}>
        <Dock
          direction="middle"
          orientation={isMobile ? "horizontal" : "vertical"}
          className="border border-white/10 bg-[#081225]/90 backdrop-blur-2xl shadow-2xl p-1.5 sm:p-2 gap-1 sm:gap-2 rounded-2xl max-w-[calc(100vw-1rem)]"
        >
          {/* Navigation Section Anchors */}
          {navItems.map((item) => {
            const isActive = (activeSection || "home") === item.id;
            return (
              <DockIcon
                key={item.label}
                size={isMobile ? 36 : 40}
                magnification={isMobile ? 42 : 56}
                orientation={isMobile ? "horizontal" : "vertical"}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-9 sm:size-10 rounded-full transition-all duration-300",
                        isActive
                          ? "bg-blue-600 text-white shadow-[0_0_18px_rgba(37,99,235,0.75)] scale-105"
                          : "hover:bg-white/10 text-muted-foreground hover:text-foreground"
                      )}
                      aria-label={item.label}
                    >
                      <item.icon className="size-4 shrink-0" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side={!isMobile ? "right" : "top"}>
                    <p className="text-xs font-semibold">{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}

          <Separator
            orientation={!isMobile ? "horizontal" : "vertical"}
            className="my-1 opacity-40 bg-white/10 hidden sm:block"
          />

          {/* Social Links (shown on sm+ / tablet and desktop) */}
          <DockIcon
            className="hidden sm:flex"
            size={isMobile ? 36 : 40}
            magnification={isMobile ? 42 : 56}
            orientation={isMobile ? "horizontal" : "vertical"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-9 sm:size-10 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground"
                  )}
                  aria-label="GitHub Profile"
                >
                  <Github className="size-4 shrink-0" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side={!isMobile ? "right" : "top"}>
                <p className="text-xs font-semibold">GitHub</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon
            className="hidden sm:flex"
            size={isMobile ? 36 : 40}
            magnification={isMobile ? 42 : 56}
            orientation={isMobile ? "horizontal" : "vertical"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-9 sm:size-10 rounded-full hover:bg-white/10 text-muted-foreground hover:text-blue-400"
                  )}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="size-4 shrink-0" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side={!isMobile ? "right" : "top"}>
                <p className="text-xs font-semibold">LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon
            className="hidden sm:flex"
            size={isMobile ? 36 : 40}
            magnification={isMobile ? 42 : 56}
            orientation={isMobile ? "horizontal" : "vertical"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={socialLinks.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-9 sm:size-10 rounded-full hover:bg-white/10 text-muted-foreground hover:text-emerald-400"
                  )}
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="size-4 shrink-0" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side={!isMobile ? "right" : "top"}>
                <p className="text-xs font-semibold">WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator
            orientation={!isMobile ? "horizontal" : "vertical"}
            className="my-1 opacity-40 bg-white/10"
          />

          {/* Theme Toggle */}
          <DockIcon
            size={isMobile ? 36 : 40}
            magnification={isMobile ? 42 : 56}
            orientation={isMobile ? "horizontal" : "vertical"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center">
                  <ThemeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent side={!isMobile ? "right" : "top"}>
                <p className="text-xs font-semibold">Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}

export default CustomDock;
