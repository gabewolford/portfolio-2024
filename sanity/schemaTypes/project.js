import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "object",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: "Who was this project for?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      initialValue: "2024",
      description: "What year was this project made?",
      validation: (Rule) => Rule.required().integer().positive().min(2023),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "string",
      description: "What technologies were used for this project?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      description: "What type of project was this?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullUrl",
      title: "Full URL",
      type: "url",
      description: "What is the full URL of the deployed project?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortUrl",
      title: "Displayed URL",
      type: "string",
      description: "What is the URL you want to display for the project?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "What order do you want to show this project alongside other projects?",
      validation: (Rule) => Rule.required().integer().positive().min(0),
    }),
  ],
  preview: {
    select: {
      title: "client",
      subtitle: "year",
    },
  },
});
