import { nanoid } from 'nanoid'
import { storeImage } from '../../../services/storeImage'
import Post from '../../../services/model/post'

const query = {}

const mutation = {
  addPost: async (args) => {
    try {
      const uid = nanoid()
      let name: string = null
      if (args.file) {
        const { filename, mimetype, createReadStream } = await args.file.file
        const ext = filename.split('.').pop()
        name = uid + '.' + ext
        const acceptMimetypes = ['image/gif', 'image/jpeg', 'image/png']
        if (!acceptMimetypes.includes(mimetype)) {
          throw new Error('Type not accept')
        }
        const stream = createReadStream()
        await storeImage({ stream, filename: name })
      }
      await Post.add({
        content: args.post,
        uid,
        userId: 31, //Todo mettre à jour avec le userId une fois recupéré
        imageUrl: name,
      })
      return 'Post added'
    } catch (e) {
      throw e
    }
  },
  getPosts: async () => {
    try {
      return await Post.getAllPosts()
    } catch (e) {
      throw e
    }
  },
}

export const postQuery = { ...query, ...mutation }
