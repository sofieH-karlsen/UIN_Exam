import initialContent from "./initialContent";

export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'initialContent',
      title: 'Initial Content',
      type: 'initialContent',
      // initialValue: {
      //   title: `${title.name} er viktig`,
      //   portableText: `${title} lorem ipsum`,
      // },
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
      // isUnique: true,
    },
    {
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preamble',
      title: 'Preamble',
      type: 'string',
      validation: (Rule) => Rule.required(),
      // initialValue: {document.value},
      // 'er lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        // type: '_title',
        // source:(title) => title.current,
      // },
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