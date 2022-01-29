declare type SignupInput = {
  lastname: string
  firstname: string
  email: string
  password: string
}

declare type ConnectInput = {
  email: string
  password: string
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
