import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Show from 'App/Mediators/Client/User/Show'
import Update from 'App/Mediators/Client/User/Update'

export default class UsersController {
  public async show ({ params, response, auth }: HttpContextContract) {
    await auth.authenticate()

    const { status, data } = await Show({ id: params.id })
    return response.status(status).send(data)
  }

  public async update ({ request, params, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const { id } = user?.$original

    const { status, data } = await Update(request.only(['name', 'bio']), params.id, id)

    return response.status(status).send(data)
  }
}
