// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        light: "./src/assets/logo_javascript.webp",
        dark: "./src/assets/logo_javascript.webp",
      },
      title: "Guía JavaScript",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introducción",
          items: [
            { label: "Bienvenidos", slug: "guides/intro/introduction" },
            { label: "¿Qué es JavaScript?", slug: "guides/intro/javascript" },
            { label: "Editores de Código", slug: "guides/intro/code-editors" },
          ],
        },
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
