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
        github: "https://github.com/lucasnbarbero/javascript-guide",
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
        {
          label: "Fundamentos",
          autogenerate: { directory: "guides/basics" },
        },
        {
          label: "Estructuras complejas",
          items: [
            {
              label: "Arrays",
              slug: "guides/complex-structures/arrays",
            },
            {
              label: "Objetos",
              items: [
                {
                  label: "Introducción",
                  slug: "guides/complex-structures/object",
                },
                {
                  label: "Referencias y copia",
                  slug: "guides/complex-structures/object/references",
                },
                {
                  label: "Métodos",
                  slug: "guides/complex-structures/object/this",
                },
                {
                  label: "Constructor",
                  slug: "guides/complex-structures/object/constructor",
                },
                {
                  label: "Encadenamiento opcional",
                  slug: "guides/complex-structures/object/optional-chaining",
                },
              ],
            },
          ],
        },
        {
          label: "Ejercicios",
          autogenerate: { directory: "guides/exercises" },
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
