const Goal = use('App/Models/Goal')

module.exports = async () => {
  const goals = await Goal.all()

  return { status: 201, data: goals }
}
