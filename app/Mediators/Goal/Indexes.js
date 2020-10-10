const Goal = use('App/Models/Goal')

module.exports = async () => {
  const goal = await Goal.all()

  return { status: 201, data: goal }
}
