const User = use('App/Models/User')

module.exports = async ({ name, email, password }) => {
  const emailExists = await User.findBy('email', email)

  if (!emailExists) {
    const user = await User.create({ name, email, password })
    return { status: 201, data: user }
  } else {
    return { status: 400, data: { error: 'User already exists' } }
  }
}
