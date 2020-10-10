'use strict'

const presenter = use('App/Mediators/Auth')

class AuthController {
  async store ({ request, response }) {
    const { status, data } = await presenter
      .Store(request.only(['name', 'last', 'email', 'password']))

    return response.status(status).send(data)
  }

  async signin ({ request, response, auth }) {
    const { status, data } = await presenter
      .Signin(request.only(['email', 'password']), auth)

    return response.status(status).send(data)
  }
}

module.exports = AuthController
