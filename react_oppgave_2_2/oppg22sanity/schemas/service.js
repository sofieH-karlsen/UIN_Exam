export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      title: 'Slogan',
      name: 'slogan',
      type: 'string',
    },
    {
      title: 'InitialContent',
      name: 'initialContent',
      type: 'object', 
      fields: [
        {
          title: 'Title',
          name: 'initialTitle',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'initialText',
          type: 'text',
        },
      ],
    },
    {
      title: 'Preamble',
      name: 'preamble',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'portableText',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
    },
    {
      title: 'Box',
      name: 'box',
      type: 'string',
    },
  ],
}