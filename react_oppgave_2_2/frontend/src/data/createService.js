import client from './client'

export const createService = async (newService) => {
  const { title, slug, slogan, preamble, box } = newService

  try {
    await client.create({
      _type: 'service',
      _key,
      title,
      slug: {
        _type: 'slug',
        current: slug,
      },
      /* ^ Tips fra Omar C på Discord-serveren */
      slogan,
      preamble,
      box,
    })
  } catch (error) {
    throw new Error(error)
  }
}

/* TODO:
Have slug be generated
*/
