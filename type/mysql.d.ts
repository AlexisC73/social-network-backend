interface RowDataPacket {}

interface OkPacket {
  fieldCount: number
  affectedRows: number
  insertId: number
  serverStatus: number
  warningCount: number
  message: string
  protocol41: boolean
  changedRows: number
}

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
