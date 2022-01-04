import { nanoid } from 'nanoid'
import db from '../database/database'
import bcrypt from 'bcrypt'

class User {
  static add = async (user: SignupInput): Promise<UserRowDataPacket | null> => {
    try {
      const isExist = (await this.getOneByMail(user.email)) as UserRowDataPacket
      if (isExist) {
        throw new Error('user already exist')
      }
      const hashedPassword = await bcrypt.hash(user.password, 10)
      await db.query(
        'INSERT INTO user (uid, lastname, firstname, email, password) VALUES (?, ?, ?, ?, ?)',
        [nanoid(), user.lastname, user.firstname, user.email, hashedPassword]
      )
      return await this.getOneByMail(user.email)
    } catch (e) {
      throw e
    }
  }
  static getByUid = async (uid: String): Promise<UserRowDataPacket | null> => {
    return (await db.query('SELECT * FROM user WHERE uid = ?', [uid]))[0]
  }
  static getOneByMail = async (
    email: String
  ): Promise<UserRowDataPacket | null> => {
    return (await db.query('SELECT * FROM user WHERE email = ?', [email]))[0]
  }
  static count = async () => {
    return await db.query('SELECT COUNT(*) FROM user')
  }
  static connect = async (user: ConnectInput) => {
    const connectUser = await this.getOneByMail(user.email)
    if (!connectUser) {
      throw new Error('User not found')
    }
    if (!(await bcrypt.compare(user.password, connectUser.password))) {
      throw new Error('Wrong password')
    }
    return connectUser
  }
}

export = User
