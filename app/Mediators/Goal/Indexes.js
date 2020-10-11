const Goal = use('App/Models/Goal')

module.exports = async (area) => {
  try{
    const goals = await Goal
      .query()
      .where('area', area)
      .where('public', true)
      .innerJoin('users', 'users.id', 'goals.user_id')
      .fetch()

    return { status: 200, data: goals }
  } catch (err) {
    return { status: 204, data: err }
  }

}
