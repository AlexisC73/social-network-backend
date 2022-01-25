import { storeImage } from '../../../services/storeImage'

const query = {}

const mutation = {
  addPost: async (args) => {
    try {
      const { filename, mimetype, createReadStream } = await args.file.file
      const acceptMimetypes = ['image/gif', 'image/jpeg', 'image/png']
      if (!acceptMimetypes.includes(mimetype)) {
        throw new Error('Type not accept')
      }
      const stream = createReadStream()
      const image = await storeImage({ stream, filename })
      console.log(image)
      return args.post
    } catch (e) {
      throw e
    }
  },
}

export const postQuery = { ...query, ...mutation }
