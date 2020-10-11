'use strict'

const presenter = use('App/Mediators/Comment')

class CommentController {
  async store({ request, response }) {
    const { status, data } = await presenter.Store(request.only(['content', 'userId', 'goalId']))

    return response.status(status).send(data)
  }
}

module.exports = CommentController
