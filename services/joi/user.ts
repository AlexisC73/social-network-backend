import joi from 'joi'

const UserInput = joi.object<UserInput>({
  lastname: joi.string().alphanum().min(1).max(50).required(),
  firstname: joi.string().alphanum().min(1).max(50).required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
})

export = { UserInput }
