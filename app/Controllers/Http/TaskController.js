'use strict'

const presenter = use('App/Mediators/Task')

class TaskController {
  async index({ request, response }) {
    const { area } = request.get()
    const { status, data } = await presenter.Indexes(area)

    return response.status(status).send(data)
  }

  // async indexSelf({ params, request, response }) {
  //   const user_id = params.user_id
  //   const { area } = request.get()
  //   const { status, data } = await presenter.IndexSelf(user_id, area)

  //   return response.status(status).send(data)
  // }

  // async show({ params, response }) {
  //   const id = params.id
  //   const { status, data } = await presenter.Show(id)

  //   return response.status(status).send(data)
  // }

  // async search({ request, response }) {
  //   const { area, tags } = request.get()
  //   console.log(tags)
  //   // const { status, data } = await presenter.Search(area, tags)

  //   return response.status(status).send(data)
  // }

  async store({ request, response, auth }) {
    const user = await auth.getUser()
    const id = user.$attributes.id

    const { status, data } = await presenter.Store(request.only([
      'title', 'estimate', 'area', 'goalId'
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

module.exports = TaskController
