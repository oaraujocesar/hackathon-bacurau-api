const User = use('App/Models/User')

module.exports = async ({ name, last, bio }, id, tokenId) => {
  if(id !== tokenId) {
    return { status: 401, data: { msg: 'You do not have access' }}
  }
  try {
    const user = await User.findBy('id', id)
    if (user) {
      user.name = name
      user.last = last
      user.bio = bio
      user.save()

      return { status: 200, data: user }
    }
    return { status: 204, data: { msg: 'User not found' }}

  } catch (err) {
    return { status: 400, data: { msg: 'Something went wrong' }}
  }
}
