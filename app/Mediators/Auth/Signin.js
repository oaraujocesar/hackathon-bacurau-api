const User = use('App/Models/User')

module.exports = async ({ email, password }, auth) => {
  const token = await auth.attempt(email, password)
  const user = await User.findBy('email', email)

  return { status: 201, data: {user, token} }
}
