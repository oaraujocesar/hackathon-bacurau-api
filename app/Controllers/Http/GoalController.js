'use strict'

const presenter = use('App/Mediators/Goal')

class GoalController {
  async store({ request, response, auth }) {
    const user = await auth.getUser()
    const id = user.$attributes.id

    const { status, data } = await presenter.Store(request.only([
      'title', 'description', 'tags', 'public'
    ]), id)

    return response.status(status).send(data)
  }
}

module.exports = GoalController
