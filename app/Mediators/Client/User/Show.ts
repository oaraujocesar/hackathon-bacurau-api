import User from 'App/Models/User'

const Show = async ({ id }) => {
  try {
    console.log(id)
    const user = await User.findBy('id', id)

    return { status: 200, data: user}
  } catch (error) {
    return { status: 400, data: { msg: 'Something went wrong!'}}
  }
}

export default Show
