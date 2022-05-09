export default {
  name: "initialContent",
  title: "Initial Content",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      isUnique: true,
      initialValue: 'er viktig',
    },
    {
      name: "portableText",
      title: "Portable Text",
      type: 'array',
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
}
