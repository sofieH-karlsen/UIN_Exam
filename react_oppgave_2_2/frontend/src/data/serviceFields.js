import client from './client'

const serviceFields = `
    title, 
    'slug': slug.current
    initialContent, 
    preamble, 
    slogan, 
    box,
`

export const getData = async (slug) => {
  const data = await client.fetch(
    `*[_type == "service" && slug.current == $slug]{${serviceFields}}`,
    { slug }
  )
  return data
}
