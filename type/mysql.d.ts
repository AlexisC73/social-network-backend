interface RowDataPacket {}

interface UserRowDataPacket extends RowDataPacket {
  id?: number
  uid?: number
  lastname?: string
  firstname?: string
  email?: string
  password?: string
  role?: number
  avatar_url?: string
}
