import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export const recentWork = defineType({
  name: "recentWork",
  title: "Recent Work",
  type: "document",
  fields: [
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "project",
        }),
      ],
    }),
  ],
  icon: DocumentsIcon,
  preview: {
    select: {
      subtitle: "project",
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: "All Recent Work",
        subtitle: subtitle,
      };
    },
  },
});
