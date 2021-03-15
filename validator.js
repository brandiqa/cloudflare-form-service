import { Validator } from '@cfworker/json-schema'

const validator = new Validator(
  {
    type: 'object',
    required: ['firstName', 'lastName', 'email', 'message', 'subscribe'],
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      email: { type: 'string' },
      message: { type: 'string' },
      subscribe: { type: 'boolean' },
    },
  },
  '2019-09',
  false,
)

function validate(input) {
  const { valid, errors } = validator.validate(input)

  // reformat errors object
  const errs = errors.map(error => ({
    type: error.keyword,
    message: error.error,
  }))

  return {
    valid,
    errors: errs,
  }
}

export default validate
