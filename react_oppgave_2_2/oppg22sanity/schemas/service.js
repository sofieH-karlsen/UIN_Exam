export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navn på tjeneste',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
         source: 'title',
         slugify: (input) => input.toLowerCase()
         .replace(/\s+/g, '-')
         .slice(0, 80),
      },
      isUnique: true,
    },
    {
      name: 'initialContent',
      title: 'Initial Content',
      type: 'initialContent',
    },
    {
      name: 'preamble',
      title: 'Preamble',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'er lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        // type: '_title',
        // source:(title) => title.current,
      // },
    },
    {
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'box',
      title: 'Box',
      type: 'string',
      validation: (Rule) => Rule.required(),
      // initialValue: '#',
      // options: {
      // }
    },
  ],
}