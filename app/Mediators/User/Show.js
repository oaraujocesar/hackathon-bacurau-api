const User = use('App/Models/User')

module.exports = async ({ id }) => {
  try {
    const user = await User.findBy('id', id)
    if (user) {
      return { status: 200, data: user }
    }
    return { status: 204, data: { msg: 'User not found' } }

  } catch (err) {
    return { status: 400, data: { msg: 'Something went wrong' }}
  }
}
