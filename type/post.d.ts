interface PostRowDataPacket extends RowDataPacket {
  id?: number
  uid?: string
  user?: number
  content?: string
  image_url?: string
}

declare type PostInput = {
  content: string
  imageUrl: string
  uid: string
  userId: number
}
