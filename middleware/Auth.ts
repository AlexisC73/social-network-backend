import jwt from 'jsonwebtoken'

export default async function Auth(req, res, next) {
  try {
    if (req?.headers?.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          req.auth = false
        } else {
          req.auth = true
          req.uid = decoded.uid
        }
      })
    } else {
      req.auth = false
    }
    next()
  } catch (e) {
    console.log(e)
  }
}
