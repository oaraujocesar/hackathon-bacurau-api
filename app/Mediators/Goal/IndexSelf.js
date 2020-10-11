const Goal = use('App/Models/Goal')

module.exports = async (user_id, area) => {
  console.log(user_id, area)
  try{
    const goals = await Goal
      .query()
      .where('user_id', user_id)
      .where('area', area)
      .fetch()

    return { status: 200, data: goals }
  } catch (err) {
    return { status: 204, data: err }
  }
}
