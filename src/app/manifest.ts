import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md. Kamrul Hasan — Portfolio",
    short_name: "Kamrul Hasan",
    description:
      "WordPress Plugin Developer & Full-Stack Engineer (MERN, AI Backend)",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
