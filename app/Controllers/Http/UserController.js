'use strict'

const presenter = use('App/Mediators/User')

class UserController {
  async show({ params, response }) {
    const { status, data } = await presenter.Show({
      id: params.id
    })

    return response.status(status).send(data)
  }

  async update({ params, request, response, auth }) {
    const user = await auth.getUser()
    const id = params.id
    const tokenId = user.$attributes.id

    const { status, data } = await presenter.Update(request.only(['name', 'last', 'bio']), id, tokenId)
    return response.status(status).send(data)
  }
}

module.exports = UserController
