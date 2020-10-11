const Goal = use('App/Models/Goal')

module.exports = async (id) => {
  try{
    const goals = await Goal.query().where('id', id).fetch()

    return { status: 200, data: goals }
  } catch (err) {
    return { status: 204, data: err }
  }

}
