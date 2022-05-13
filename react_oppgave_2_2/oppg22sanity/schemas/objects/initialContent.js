export default {
  name: "initialContent",
  title: "Initial Content",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      //validation: (Rule) => Rule.required(),
      validation: Rule => Rule.custom((field, context) => (context.document.flag && field === undefined) ? "This field must not be empty." : true),
      isUnique: true,
      initialValue: '[Ny tjeneste] er viktig',
    },
    {
      name: "portableText",
      title: "Portable Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
}

