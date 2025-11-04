import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
