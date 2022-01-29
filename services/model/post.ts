import { nanoid } from 'nanoid'
import db from '../database/database'
import bcrypt from 'bcrypt'

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
}

export = Post
