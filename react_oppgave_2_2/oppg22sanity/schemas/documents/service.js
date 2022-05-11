export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navn på tjeneste',
      type: 'string',
      validation: (Rule) => Rule.required(),
      isUnique: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Brukes til opprettelse av unik URL',
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
      description: 'Kort om tjenesten',
      validation: (Rule) => Rule.required(),
      initialValue: '[Ny tjeneste] er lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore', 
    },
    {
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
      description: 'Gjenkjennbart ordtak',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'box',
      title: 'Box ',
      type: 'string',
      description: 'HEX fargekode',
      isUnique: true,
      validation: (Rule) => Rule.required().min(4).max(7),
      options:{
        list: [
          '#FF8DCA',
          '#A3A3F5',
          '#8DFAD0',
          '#A8BCE8',
          '#E8E3A8',
          '#D7A8E8',
          '#A8DEE8',
          '#A8E8B2',
        ],
      },
    },
  ],
}