import schema from '../../services/joi/user'
import express from 'express'

const query = {
  test: () => {
    return 'GraphQL is running'
  },
}

interface SignupArgs {
  user: UserInput
}

const mutation = {
  signup: async (args: SignupArgs) => {
    try {
      const { user } = args
      await schema.UserInput.validateAsync(user) //Données vérifiés
      return user.firstname
    } catch (e) {
      throw e
    }
  },
}

export = { ...query, ...mutation }
