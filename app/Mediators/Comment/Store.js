const Comment = use('App/Models/Comment')

module.exports = async (content, userId, goalId) => {
  try {
    const comment = await Goal.create({
      content,
      user_id: userId,
      goal_id: goalId
    })

    return { status: 201, data: comment }
  } catch (err) {
    return { status: 404, data: { msg: 'Item does not exists' }}
  }


  return { status: 410 }
}
