interface RowDataPacket {}

interface UserRowDataPacket extends RowDataPacket {
  id?: Number
  uid?: Number
  lastname: string
  firstname: string
  email: string
  password: string
  role: number
  avatar_url: string
}
