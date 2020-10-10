import User from 'App/Models/User'

const Update = async ({ name, bio }: User, id, tokenId) => {
  try {
    const user = await User.findBy('id', id)

    if(user?.$original.id === tokenId) {
      user?.bio = bio
      user.name = name

      await user.save()
      return { status: 200, data: user }
    }
  } catch (error) {
    return { status: 400, data: { msg: 'Something went wrong' }}
  }
}

export default Update
