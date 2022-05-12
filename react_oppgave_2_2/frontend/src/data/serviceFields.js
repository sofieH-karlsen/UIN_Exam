import client from './client'

const serviceFields = `
    title,
    key, 
    'id': _id,
    'slug': slug.current,
    'initialTitle': initialContent.title,
    'portableText': initialContent.portableText[]{...}, 
    'preAmble': preamble, 
    slogan, 
    box,
`

export const getSlug = async () => {
  const data = await client.fetch(
    `*[_type == "service" && slug.current == $slug]{${serviceFields}}`,
    {
      slug,
    }
  )
  return data?.[0]
}

export const getServices = async () => {
  const data = await client.fetch(`*[_type == "service"]{${serviceFields}}`)
  return data
}

export const getService = async (slug) => {
  const data = await client.fetch(
    `*[_type == "service" && slug.current == $slug]{${serviceFields}}`,
    { slug }
  )
  return data?.[0]
}
