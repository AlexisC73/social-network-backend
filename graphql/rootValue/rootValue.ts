import { userQuery } from './user/user'
import { postQuery } from './post/post'

export default {
  ...userQuery,
  ...postQuery,
}
