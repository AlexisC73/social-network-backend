import schema from '../../services/joi/user'
import express from 'express'
import User from '../../services/model/user'
import jwt from 'jsonwebtoken'

interface SigninArgs {
  user: ConnectInput
}

const query = {
  signin: async ({ user }: SigninArgs) => {
    try {
      const connectUser = await User.connect(user)
      return {
        token: jwt.sign(
          {
            uid: connectUser.uid,
          },
          process.env.JWT_SECRET
        ),
        lastname: connectUser.lastname,
        firstname: connectUser.firstname,
        email: connectUser.email,
        uid: connectUser.uid,
      }
    } catch (e) {
      throw e
    }
  },
}

interface SignupArgs {
  user: SignupInput
}

const mutation = {
  signup: async (args: SignupArgs) => {
    try {
      const { user } = args
      await schema.UserInput.validateAsync(user) //Données vérifiés
      return { ...(await User.add(user)), password: null }
    } catch (e) {
      throw e
    }
  },
}

export = { ...query, ...mutation }
