import client from './client'
import {useState} from 'react'

export const createService = async (newService) => {
  const { title, slug, slogan, preamble, box } = newService
  const useForm = (callback) =>{
    const [values, setValues] = useState({})
  }
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
