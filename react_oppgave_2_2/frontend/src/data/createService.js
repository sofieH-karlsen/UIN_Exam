import client from './client'

export const createService = async (newService) => {
  const { title, slug, slogan, preAmble, box } = newService

  try {
    await client.create({
      _type: 'service',
      title,
      slug,
      slogan,
      preAmble,
      box,
    })
  } catch (error) {
    throw new Error(error)
  }
}

/*
Have slug be generated
*/
