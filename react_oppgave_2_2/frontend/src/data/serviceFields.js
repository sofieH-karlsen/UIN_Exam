import client from './client'

const serviceFields = `
    title, 
    key,
    'slug': slug.current,
    'initialContent': initialContent.portableText, 
    preAmble, 
    slogan, 
    box,
`

export const getServices = async () => {
  const data = await client.fetch(`*[_type == "service"]{${serviceFields}}`)
  return data
}

export const getData = async (slug) => {
  const data = await client.fetch(
    `*[_type == "service" && slug.current == $slug]{${serviceFields}}`,
    { slug }
  )
  return data?.[0]
}
