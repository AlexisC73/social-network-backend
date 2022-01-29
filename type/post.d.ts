interface PostRowDataPacket extends RowDataPacket {
  id?: number
  uid?: number
  lastname?: string
  firstname?: string
  email?: string
  password?: string
  role?: number
  avatar_url?: string
}

declare type PostInput = {
  content: string
  imageUrl: string
  uid: string
  userId: number
}
