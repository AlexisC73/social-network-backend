import db from '../database/database'

class Post {
  static add = async ({
    content,
    imageUrl,
    userId,
    uid,
  }: PostInput): Promise<OkPacket | null> => {
    try {
      const query = (await db.query(
        'INSERT INTO post (uid, user, content, image_url) VALUES (?, ?, ?, ?)',
        [uid, userId, content, imageUrl]
      )) as OkPacket
      return query
    } catch (e) {
      console.log(e)
    }
  }

  static getAllPosts = async () => {
    try {
      const query = (await db.query('SELECT * FROM post')) as [
        PostRowDataPacket
      ]
      return query
    } catch (e) {
      throw e
    }
  }
}

export = Post
