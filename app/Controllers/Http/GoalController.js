'use strict'

const presenter = use('App/Mediators/Goal')

class GoalController {
  async index({ request, response }) {
    const { area } = request.get()
    const { status, data } = await presenter.Indexes(area)

    return response.status(status).send(data)
  }

  async indexSelf({ params, response }) {
    const user_id = params.user_id

    const { status, data } = await presenter.IndexSelf(user_id)

    return response.status(status).send(data)
  }

  async show({ params, response }) {
    const id = params.id

    const { status, data } = await presenter.Show(id)

    return response.status(status).send(data)
  }

  async store({ request, response, auth }) {
    const user = await auth.getUser()
    const id = user.$attributes.id

    const { status, data } = await presenter.Store(request.only([
      'title', 'description', 'tags', 'public', 'area'
    ]), id)

    return response.status(status).send(data)
  }

  async update({ params, response }) {
    const id = params.id
    const { status, data } = await presenter.Update(id)

    return response.status(status).send(data)
  }

  async delete({ params, response }) {
    const id = params.id
    const { status } = await presenter.Delete(id)

    return response.status(status).send()
  }
}

module.exports = GoalController
